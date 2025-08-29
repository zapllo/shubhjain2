import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Content, { IContent, ITestimonial } from '@/lib/models/Content'
import { verifyToken, getTokenFromHeaders } from '@/lib/auth'

const defaultTestimonials: ITestimonial[] = [
  {
    id: '1',
    name: 'Swastik Nandakumar',
    quote: '"Made 65 lakhs without ads!"',
    thumbnail: 'https://lp.launchatscale.com/wp-content/uploads/2025/02/Swastik-Nand_1-1.png',
    videoUrl: 'https://millionsindays.com/wp-content/uploads/2024/11/24-May-2024-6638af60660aba4f10831578.mp4'
  },
  {
    id: '2',
    name: 'Karthik Naidu',
    quote: '"Generated 80 lakh in two days!"',
    thumbnail: 'https://lp.launchatscale.com/wp-content/uploads/2025/02/Karthik-stage-min-scaled-1.jpg',
    videoUrl: 'https://millionsindays.com/wp-content/uploads/2024/11/24-May-2024-66105afe22ca2788b2ef90c5.mp4'
  },
  {
    id: '3',
    name: 'Arzoo Shah',
    quote: '"Made so much revenue in 3 days, what usually takes 6 months!"',
    thumbnail: 'https://lp.launchatscale.com/wp-content/uploads/2025/02/Arzoo-Shah_1-1.png',
    videoUrl: 'https://millionsindays.com/wp-content/uploads/2024/11/24-May-2024-6610554a86f6ec7fd8be0b5d.mp4'
  }
]

export async function GET() {
  try {
    await dbConnect()
    let content = await Content.findOne()
    
    if (!content) {
      // Create default content if none exists
      content = await Content.create({
        testimonials: defaultTestimonials,
        eventDeadline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days from now
      })
    }
    
    return NextResponse.json(content)
  } catch (error) {
    console.error('Get content error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    await dbConnect()
    
    const token = getTokenFromHeaders(request)
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const decoded = verifyToken(token)
    if (!decoded) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
    }

    const updateData: Partial<IContent> = await request.json()
    
    let content = await Content.findOne()
    if (!content) {
      content = await Content.create(updateData)
    } else {
      content = await Content.findOneAndUpdate({}, updateData, { new: true })
    }
    
    return NextResponse.json(content)
  } catch (error) {
    console.error('Update content error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}