import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    // Email validation
    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    const trimmedEmail = email.trim();
    let isSuccess = false;
    let errorMessage = 'Failed to process subscription. Please try again.';

    // 1. Send via Web3Forms API to faysal.shanto.official@gmail.com
    const web3Key =
      process.env.WEB3FORMS_ACCESS_KEY ||
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
      '34828451-c749-4c08-ae14-3a611387235f';

    if (web3Key) {
      try {
        const web3Res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: web3Key,
            email: trimmedEmail,
            subject: `New Newsletter Subscriber: ${trimmedEmail}`,
            from_name: 'Faysal Portfolio Newsletter',
            message: `New subscriber email recorded: ${trimmedEmail}`,
            form_name: 'Newsletter Subscription',
            to_email: 'faysal.shanto.official@gmail.com',
          }),
        });

        const web3Data = await web3Res.json().catch(() => null);
        if (web3Res.ok && web3Data?.success) {
          isSuccess = true;
        } else if (web3Data?.message) {
          errorMessage = web3Data.message;
        }
      } catch (web3Err) {
        console.error('Web3Forms Newsletter submission error:', web3Err);
      }
    }

    // 2. Google Apps Script / Sheet API integration (if configured)
    const googleSheetUrl =
      process.env.GOOGLE_SHEET_NEWSLETTER_URL ||
      process.env.NEXT_PUBLIC_GOOGLE_SHEET_NEWSLETTER_URL;

    if (googleSheetUrl) {
      try {
        const sheetRes = await fetch(googleSheetUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: trimmedEmail,
            timestamp: new Date().toISOString(),
            source: 'Faysal Portfolio Website Newsletter',
          }),
        });

        if (sheetRes.ok) {
          isSuccess = true;
        }
      } catch (sheetErr) {
        console.error('Google Sheet Newsletter log error:', sheetErr);
      }
    }

    if (isSuccess) {
      return NextResponse.json({
        success: true,
        message: 'Thank you for subscribing! You are now on the mailing list.',
      });
    } else {
      return NextResponse.json(
        { success: false, message: errorMessage },
        { status: 400 }
      );
    }
  } catch (error: any) {
    console.error('Newsletter API route error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'An internal server error occurred. Please try again.',
      },
      { status: 500 }
    );
  }
}
