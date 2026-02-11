'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Code2, ExternalLink, Github, Linkedin, Mail, Sparkles, X } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { experiences, projects, skills } from '@/lib/data';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

export function PortfolioPage() {
  const [activeProject, setActiveProject] = useState<(typeof projects)[number] | null>(null);
  const reducedMotion = useReducedMotion();
  const [contact, setContact] = useState({ name: "", email: "", message: "" });
  const [contactStatus, setContactStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [contactError, setContactError] = useState<string>("");

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const submitContact = async (e: React.FormEvent) => {
    e.preventDefault();
    setContactError("");

    if (contact.name.trim().length < 2) {
      setContactError("Please enter your name.");
      return;
    }
    if (!isValidEmail(contact.email.trim())) {
      setContactError("Please enter a valid email address.");
      return;
    }
    if (contact.message.trim().length < 10) {
      setContactError("Please enter a message (at least 10 characters).");
      return;
    }

    try {
      setContactStatus("sending");

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contact),
      });

      const data = await res.json();

      if (!res.ok || !data?.ok) {
        setContactStatus("error");
        setContactError("Failed to send. Please try again.");
        return;
      }

      setContactStatus("sent");
      setContact({ name: "", email: "", message: "" });
    } catch {
      setContactStatus("error");
      setContactError("Failed to send. Please try again.");
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: reducedMotion ? 'auto' : 'smooth',
      block: 'start'
    });
  };

  return (
    <main className="relative overflow-hidden">
      <section className="relative border-b border-[hsl(var(--border))]">
        <div className="grid-lines absolute inset-0 -z-10" />
        <motion.div
          className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center gap-8 px-6 py-24"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.p variants={fadeInUp} className="flex items-center gap-2 text-sm text-[hsl(var(--muted-foreground))]">
            <Sparkles className="h-4 w-4 text-[hsl(var(--primary))]" /> crafting high-leverage systems and services
          </motion.p>
          <motion.h1 variants={fadeInUp} className="max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
            <span className="text-[hsl(var(--primary))]">Software Engineer</span> with curiosity and Innovation.
          </motion.h1>
          <motion.p variants={fadeInUp} className="max-w-2xl text-lg leading-relaxed text-[hsl(var(--muted-foreground))]">
            I design and develop large scale distributed services that blend product strategy, systems thinking with production-grade reliability.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
            <Button size="lg" onClick={() => scrollToSection('projects')}>
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <a href="https://drive.google.com/file/d/1n00AngZMbjkrd5-yiY1bItfPGPuXCHZs/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="ghost">
                View Resume
              </Button>
            </a>

          </motion.div>
        </motion.div>
      </section>

      <Section id="about" title="About Me" subtitle="Story-driven engineering">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ duration: reducedMotion ? 0 : 0.5 }}
          className="glass rounded-3xl p-8"
        >
          <p className="text-pretty text-lg leading-relaxed text-[hsl(var(--muted-foreground))]">
            I am Jagadeesh Bodavula, a full-stack developer who enjoys building scalable, reliable systems and turning complex workflows into simple, observable, and resilient platforms. My focus is
            crafting software that feels effortless, scales responsibly, and leaves a strong emotional impression on users. I work at the intersection of Full Stack, Cloud and Gen AI.
          </p>
        </motion.div>
      </Section>

      <Section id="skills" title="Skills" subtitle="Toolkit for building resilient systems">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.article
              key={skill.title}
              className="glass group rounded-2xl p-6"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={reducedMotion ? undefined : { y: -6 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
            >
              <skill.icon className="mb-4 h-6 w-6 text-[hsl(var(--primary))]" />
              <h3 className="mb-2 text-lg font-medium">{skill.title}</h3>
              <ul className="space-y-1 text-sm text-[hsl(var(--muted-foreground))]">
                {skill.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section id="experience" title="Experience" subtitle="Selected journey">
        <div className="relative space-y-6 before:absolute before:left-5 before:top-0 before:h-full before:w-px before:bg-[hsl(var(--border))]">
          {experiences.map((item, index) => (
            <motion.article
              key={item.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.08 }}
              className="glass relative ml-12 rounded-2xl p-6"
            >
              <span className="absolute -left-[2.6rem] top-7 h-4 w-4 rounded-full bg-[hsl(var(--primary))]" aria-hidden="true" />
              <p className="text-xs uppercase tracking-[0.2em] text-[hsl(var(--muted-foreground))]">{item.period}</p>
              <h3 className="text-xl font-semibold">{item.role} · {item.company}</h3>
              <p className="mt-2 text-[hsl(var(--muted-foreground))]">{item.impact}</p>
              <p className="mt-3 text-sm text-[hsl(var(--muted-foreground))]">{item.stack.join(' • ')}</p>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section id="projects" title="Featured Projects" subtitle="Impact-focused builds">
        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.button
              key={project.name}
              type="button"
              onClick={() => setActiveProject(project)}
              className="glass group relative overflow-hidden rounded-2xl p-6 text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
              whileHover={reducedMotion ? undefined : { scale: 1.01 }}
            >
              <div className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br ${project.color}`} />
              <p className="text-xs uppercase tracking-[0.2em] text-[hsl(var(--muted-foreground))]">{project.tags.join(' · ')}</p>
              <h3 className="mt-4 text-2xl font-semibold">{project.name}</h3>
              <p className="mt-3 text-[hsl(var(--muted-foreground))]">{project.summary}</p>
              <span className="mt-5 inline-flex items-center text-sm text-[hsl(var(--primary))]">Explore case study <ExternalLink className="ml-2 h-4 w-4" /></span>
            </motion.button>
          ))}
        </div>
      </Section>

      <Section id="contact" title="Contact" subtitle="Let’s build your next unfair advantage">
        <motion.form
          onSubmit={submitContact}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="glass grid gap-4 rounded-3xl p-8"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <input
              className="rounded-xl border border-[hsl(var(--border))] bg-transparent px-4 py-3 outline-none transition focus:ring-2 focus:ring-[hsl(var(--ring))]"
              placeholder="Your name"
              value={contact.name}
              onChange={(e) => setContact((p) => ({ ...p, name: e.target.value }))}
            />
            <input
              className="rounded-xl border border-[hsl(var(--border))] bg-transparent px-4 py-3 outline-none transition focus:ring-2 focus:ring-[hsl(var(--ring))]"
              placeholder="Your email"
              type="email"
              value={contact.email}
              onChange={(e) => setContact((p) => ({ ...p, email: e.target.value }))}
            />
          </div>

          <textarea
            className="min-h-32 rounded-xl border border-[hsl(var(--border))] bg-transparent px-4 py-3 outline-none transition focus:ring-2 focus:ring-[hsl(var(--ring))]"
            placeholder="Tell me about your project"
            value={contact.message}
            onChange={(e) => setContact((p) => ({ ...p, message: e.target.value }))}
          />

          {contactError ? (
            <p className="text-sm text-red-400">{contactError}</p>
          ) : contactStatus === "sent" ? (
            <p className="text-sm text-green-400">Message sent — I’ll get back to you soon.</p>
          ) : null}

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-[hsl(var(--muted-foreground))]">
              <a href="https://github.com/DeadpoolJaga" className="hover:text-[hsl(var(--foreground))]"><Github className="h-5 w-5" /></a>
              <a href="https://www.linkedin.com/in/jagadeesh-bodavula/" className="hover:text-[hsl(var(--foreground))]"><Linkedin className="h-5 w-5" /></a>
              <a href="mailto:bodavulajagadeesh@gmail.com" className="hover:text-[hsl(var(--foreground))]"><Mail className="h-5 w-5" /></a>
            </div>

            <Button type="submit" disabled={contactStatus === "sending"}>
              {contactStatus === "sending" ? "Sending..." : "Send Message"}
              <Code2 className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.form>
      </Section>

      <Dialog.Root open={!!activeProject} onOpenChange={(open) => !open && setActiveProject(null)}>
        <AnimatePresence>
          {activeProject ? (
            <Dialog.Portal forceMount>
              <Dialog.Overlay asChild>
                <motion.div
                  className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              </Dialog.Overlay>
              <Dialog.Content asChild>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="glass fixed left-1/2 top-1/2 z-50 w-[min(92vw,680px)] -translate-x-1/2 -translate-y-1/2 rounded-3xl p-8"
                >
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <div>
                      <Dialog.Title className="text-2xl font-semibold">{activeProject.name}</Dialog.Title>
                      <Dialog.Description className="mt-2 text-[hsl(var(--muted-foreground))]">{activeProject.summary}</Dialog.Description>
                    </div>
                    <Dialog.Close className="rounded-full border border-[hsl(var(--border))] p-2"><X className="h-4 w-4" /></Dialog.Close>
                  </div>
                  <p className="mb-4 text-lg">{activeProject.result}</p>
                  <p className="text-sm uppercase tracking-[0.2em] text-[hsl(var(--muted-foreground))]">Tech: {activeProject.tags.join(' · ')}</p>
                </motion.div>
              </Dialog.Content>
            </Dialog.Portal>
          ) : null}
        </AnimatePresence>
      </Dialog.Root>
    </main>
  );
}

function Section({
  id,
  title,
  subtitle,
  children
}: {
  id: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-6 py-24">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.2em] text-[hsl(var(--primary))]">{subtitle}</p>
        <h2 className="mt-2 text-3xl font-semibold md:text-4xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}
