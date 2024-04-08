import { registerSchema, registerSchemaType } from "@/lib/schemas";
import { db } from "@openstarter/database";
import { NextRequest, NextResponse } from "next/server";
import * as bcrypt from "bcrypt";
import { nanoid } from "nanoid";
import { sendMail } from "@openstarter/mail";

export const POST = async (req: NextRequest) => {
  let data = (await req.json()) as registerSchemaType;

  try {
    data = await registerSchema.parseAsync(data);
  } catch (e) {
    return NextResponse.json({ message: "Bad request" }, { status: 400 });
  }

  const exists = await db.user.findUnique({ where: { email: data.email } });

  if (exists) {
    return NextResponse.json(
      { message: "User already registered" },
      { status: 400 },
    );
  }

  const hashedPassword = await bcrypt.hash(data.password, 12);

  const user = await db.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: hashedPassword,
    },
  });

  const token = nanoid(32);

  await db.verificationToken.create({
    data: {
      identifier: user.id,
      token,
    },
  });

  sendMail({
    to: data.email,
    from: process.env.EMAIL_FROM as string,
    subject: "Email verification",
    html: `${token}`,
  });

  return NextResponse.json({ message: "Success" });
};
