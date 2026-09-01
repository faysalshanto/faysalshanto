import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, name, email, message } = body;

    // Validation
    if (!email || !message) {
      return NextResponse.json(
        { success: false, message: 'Please provide both email and message.' },
        { status: 400 }
      );
    }

    const fullName = (name || `${firstName || ''} ${lastName || ''}`).trim() || 'Portfolio Visitor';
    
    // Check environment variables for Web3Forms or Formspree
    const web3Key = process.env.WEB3FORMS_ACCESS_KEY || process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    const formspreeUrl = process.env.FORMSPREE_URL || process.env.NEXT_PUBLIC_FORMSPREE_URL;

    // 1. Web3Forms Submission
    if (web3Key && web3Key !== 'YOUR_WEB3FORMS_ACCESS_KEY') {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: web3Key,
          name: fullName,
          email,
          message,
          subject: `Portfolio Contact: Message from ${fullName}`,
          from_name: 'Faysal Portfolio Contact Form',
          replyto: email,
        }),
      });

      const data = await response.json().catch(() => null);

      if (response.ok && data?.success) {
        return NextResponse.json({
          success: true,
          message: 'Message sent successfully!',
        });
      } else {
        return NextResponse.json(
          {
            success: false,
            message: data?.message || 'Failed to submit form via Web3Forms.',
          },
          { status: response.status || 400 }
        );
      }
    }

    // 2. Formspree Submission
    if (formspreeUrl) {
      const response = await fetch(formspreeUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: fullName,
          email,
          message,
          _subject: `Portfolio Contact: Message from ${fullName}`,
          _to: 'faysal.shanto.official@gmail.com',
        }),
      });

      if (response.ok) {
        return NextResponse.json({
          success: true,
          message: 'Message sent successfully!',
        });
      } else {
        const data = await response.json().catch(() => null);
        return NextResponse.json(
          {
            success: false,
            message: data?.error || 'Failed to submit form via Formspree.',
          },
          { status: response.status || 400 }
        );
      }
    }

    // 3. Fallback: Direct Web3Forms submission with default or key lookup
    const fallbackResponse = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        access_key: web3Key || 'YOUR_WEB3FORMS_ACCESS_KEY',
        name: fullName,
        email,
        message,
        subject: `Portfolio Contact: Message from ${fullName}`,
        from_name: 'Faysal Portfolio Contact Form',
        replyto: email,
      }),
    });

    const fallbackData = await fallbackResponse.json().catch(() => null);

    if (fallbackResponse.ok && fallbackData?.success) {
      return NextResponse.json({
        success: true,
        message: 'Message sent successfully!',
      });
    }

    // Return informative configuration message if no valid access key is set yet
    return NextResponse.json(
      {
        success: false,
        message:
          fallbackData?.message ||
          'Form service access key is required. Please set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in .env.local with a key generated from https://web3forms.com for faysal.shanto.official@gmail.com.',
      },
      { status: 400 }
    );
  } catch (error: any) {
    console.error('Contact route error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'An internal server error occurred while sending your message.',
      },
      { status: 500 }
    );
  }
}
