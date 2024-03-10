// app/api/tags/route.ts

import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { name } = await request.json();

  try {
    const response = await fetch('http://localhost:8080/api/tags', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }),
    });

    if (response.ok) {
      return NextResponse.json({ message: 'Tag created successfully' }, { status: 201 });
    } else {
      return NextResponse.json({ error: 'Failed to create tag' }, { status: 500 });
    }
  } catch (error) {
    console.error('Error creating tag:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}