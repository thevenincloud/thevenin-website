import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { companyName, email, companySize, location, message } = body

    // Validate required fields
    if (!companyName || !email || !companySize || !location || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Get environment variables
    const brevoSmtpUri = process.env.BREVO_SMTP_CONNECTION_URI
    const salesEmail = process.env.SALES_NOTIFICATION_EMAIL || 'sales@thevenin.io'
    const fromEmail = process.env.SALES_NOTIFICATION_FROM || 'no-reply@thevenin.io'
    const fromName = process.env.SALES_NOTIFICATION_FROM_NAME || 'Thevenin Contact Form'

    if (!brevoSmtpUri) {
      console.error('BREVO_SMTP_CONNECTION_URI is not configured')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    // Parse SMTP URI: smtp://username:password@host:port
    const smtpMatch = brevoSmtpUri.match(/smtp:\/\/([^:]+):([^@]+)@([^:]+):(\d+)/)
    
    if (!smtpMatch) {
      console.error('Invalid BREVO_SMTP_CONNECTION_URI format')
      return NextResponse.json(
        { error: 'Email service misconfigured' },
        { status: 500 }
      )
    }

    const [, smtpUser, smtpPass, smtpHost, smtpPort] = smtpMatch

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(smtpPort),
      secure: false, // Brevo uses STARTTLS
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    })

    // Compose email
    const emailHtml = `
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #4b5563; margin-bottom: 5px; }
            .value { color: #1f2937; }
            .message-box { background: white; padding: 15px; border-left: 4px solid #667eea; margin-top: 10px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2 style="margin: 0;">New Contact Form Submission</h2>
              <p style="margin: 5px 0 0 0; opacity: 0.9;">From Thevenin Landing Page</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Company Name:</div>
                <div class="value">${companyName}</div>
              </div>
              
              <div class="field">
                <div class="label">Email:</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              
              <div class="field">
                <div class="label">Company Size:</div>
                <div class="value">${companySize}</div>
              </div>
              
              <div class="field">
                <div class="label">Location:</div>
                <div class="value">${location}</div>
              </div>
              
              <div class="field">
                <div class="label">Message:</div>
                <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
              </div>
            </div>
          </div>
        </body>
      </html>
    `

    const emailText = `
New Contact Form Submission

Company Name: ${companyName}
Email: ${email}
Company Size: ${companySize}
Location: ${location}

Message:
${message}
    `

    // Send email
    await transporter.sendMail({
      from: `"${fromName}" <${fromEmail}>`,
      to: salesEmail,
      replyTo: email,
      subject: `New Contact: ${companyName}`,
      text: emailText,
      html: emailHtml,
    })

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
