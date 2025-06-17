import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  console.log("ROTA DE TESTE /api/test FOI ACIONADA!");
  return NextResponse.json({ message: "A rota de teste funciona!" });
}