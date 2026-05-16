import { NextRequest, NextResponse } from 'next/server'

const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const isValidPhone = (phone: string) => {
  const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/
  return phoneRegex.test(phone.replace(/\s/g, ''))
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, age, health_goal, message, source, timestamp } = body

    // Validation
    if (!name || !email || !phone || !health_goal) {
      return NextResponse.json(
        { error: 'Please fill in all required fields' },
        { status: 400 }
      )
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      )
    }

    if (!isValidPhone(phone)) {
      return NextResponse.json(
        { error: 'Please enter a valid phone number' },
        { status: 400 }
      )
    }

    const inquiryData = {
      name,
      email,
      phone,
      age: age || 'Not specified',
      health_goal,
      message: message || 'No additional message',
      source,
      timestamp,
      submittedAt: new Date().toISOString(),
    }

    // Log the inquiry
    console.log('[Wellness Inquiry] New submission:', inquiryData)

    // TODO: Integrate with your services:
    // 1. Save to database (Supabase, Firebase, MongoDB, etc.)
    // 2. Send confirmation email to user
    // 3. Send notification email to wellness team
    // 4. Add to CRM (Mailchimp, HubSpot, Salesforce, etc.)

    // Example email integration (uncomment when ready)
    // await sendInquiryConfirmationEmail(email, name)
    // await notifyWellnessTeam(inquiryData)

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your inquiry. We will contact you soon.',
        inquiryId: `INQ_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('[Wellness Inquiry] Error:', error)
    return NextResponse.json(
      { error: 'Failed to process your inquiry. Please try again.' },
      { status: 500 }
    )
  }
}
