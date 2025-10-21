import { type NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const feedbackSchema = z.object({
  type: z.enum(['good', 'bad']),
  feedback: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { url, feedback } = body;
    
    // Validate the feedback data
    const validatedFeedback = feedbackSchema.parse(feedback);
    
    // For static export, we'll return a success response without actually submitting
    // In a real deployment, you could set up a separate service to handle this
    console.log('Feedback received:', { url, feedback: validatedFeedback });
    
    return NextResponse.json({
      type: 'success' as const,
      message: 'Thank you for your feedback!',
    });
  } catch (error) {
    console.error('Feedback error:', error);
    
    return NextResponse.json(
      {
        type: 'error' as const,
        message: 'Failed to submit feedback. Please try again later.',
      },
      { status: 500 }
    );
  }
}

// Required for static export
export const dynamic = 'force-static';
export const revalidate = false;