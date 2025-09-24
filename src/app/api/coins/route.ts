import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd',
      {
        headers: {
          'x-cg-demo-api-key': process.env.COINGECKO_API_KEY || '',
          Accept: 'application/json',
        },
      }
    );

    if (!res.ok)
      return NextResponse.json(
        { error: 'Failed to fetch' },
        { status: res.status }
      );

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      { error: `Server error: ${err}` },
      { status: 500 }
    );
  }
}
