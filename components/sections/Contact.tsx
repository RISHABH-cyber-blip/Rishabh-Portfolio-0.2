"use client";

import { motion } from "framer-motion";
import { Linkedin, Github, Instagram, Globe, MessageCircle } from "lucide-react";
import { socials } from "@/lib/data";

export default function Contact() {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up to Supabase / Appwrite / an email API route.
    alert("Form submitted — connect this to your backend of choice.");
  };

  return (
    <section id="contact" className="py-32">
      <div className="mx-auto max-w-[1240px] px-8">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-14 max-w-[600px] text-center"
        >
          <span className="eyebrow justify-center">GET IN TOUCH</span>
          <h2 className="font-display mt-4 text-4xl font-extrabold md:text-5xl">
            Let&apos;s Build Something
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="glass mx-auto max-w-[620px] p-11"
        >
          <form onSubmit={onSubmit} className="flex flex-col gap-7">
            <Field id="name" label="Name" type="text" />
            <Field id="email" label="Email" type="email" />
            <Field id="message" label="Message" type="textarea" />
            <button type="submit" className="btn btn-solid cursor-hover mt-1 w-full justify-center">
              Send Message
            </button>
          </form>
        </motion.div>

        <div className="mt-11 flex justify-center gap-7">
          <SocialIcon href={socials.linkedin} icon={<Linkedin size={22} />} label="LinkedIn" />
          <SocialIcon href={socials.github} icon={<Github size={22} />} label="GitHub" />
          <SocialIcon href={socials.instagram} icon={<Instagram size={22} />} label="Instagram" />
          <SocialIcon href={socials.portfolio} icon={<Globe size={22} />} label="Portfolio" />
          <SocialIcon
            href={`https://wa.me/${socials.whatsappNumber}`}
            icon={<MessageCircle size={22} />}
            label="WhatsApp"
          />
        </div>
      </div>
    </section>
  );
}

function Field({ id, label, type }: { id: string; label: string; type: "text" | "email" | "textarea" }) {
  const shared =
    "peer w-full border-b border-border bg-transparent py-3.5 text-[15px] outline-none transition-colors focus:border-accent placeholder:text-transparent";
  return (
    <div className="relative">
      {type === "textarea" ? (
        <textarea id={id} rows={4} placeholder=" " required className={`${shared} resize-none`} />
      ) : (
        <input id={id} type={type} placeholder=" " required className={shared} />
      )}
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-0 top-3.5 text-[15px] text-faint transition-all peer-focus:-top-3.5 peer-focus:text-[11.5px] peer-focus:tracking-wide peer-focus:text-accent peer-[&:not(:placeholder-shown)]:-top-3.5 peer-[&:not(:placeholder-shown)]:text-[11.5px]"
      >
        {label}
      </label>
    </div>
  );
}

function SocialIcon({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="cursor-hover text-muted transition-all hover:-translate-y-1 hover:text-accent"
    >
      {icon}
    </a>
  );
}
