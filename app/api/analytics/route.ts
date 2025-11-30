import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Log web vitals (in production, you would send this to your analytics service)
    console.log('Web Vitals:', {
      name: body.name,
      value: body.value,
      rating: body.rating,
      delta: body.delta,
      id: body.id,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error processing web vitals:', error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}

export const runtime = 'edge'
