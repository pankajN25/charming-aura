import { NextRequest, NextResponse } from 'next/server'

// Email validation
const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Phone validation (basic)
const isValidPhone = (phone: string) => {
  const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/
  return phoneRegex.test(phone.replace(/\s/g, ''))
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, source, timestamp } = body

    // Validation
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    if (!isValidPhone(phone)) {
      return NextResponse.json(
        { error: 'Invalid phone number' },
        { status: 400 }
      )
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Integrate with CRM (Mailchimp, HubSpot, etc.)

    // For now, log the submission
    console.log('[Wellness Lead] New submission:', {
      name,
      email,
      phone,
      source,
      timestamp,
      submittedAt: new Date().toISOString(),
    })

    // TODO: Integrate with your email service
    // Example: Send welcome email via SendGrid, Mailgun, etc.
    // await sendWelcomeEmail(email, name)

    // TODO: Integrate with CRM
    // Example: Add contact to Mailchimp, HubSpot, etc.
    // await addToCRM({ name, email, phone, source })

    // Send success response
    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your submission. Check your email for your wellness assessment.',
        leadId: `LEAD_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('[Wellness Lead] Error:', error)
    return NextResponse.json(
      { error: 'Failed to process submission' },
      { status: 500 }
    )
  }
}
