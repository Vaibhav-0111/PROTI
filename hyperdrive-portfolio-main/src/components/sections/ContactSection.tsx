import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export const ContactSection = () => {
  const form = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setSending(true);

    emailjs
      .sendForm(
        "service_3yld566",   // 🔑 replace with EmailJS Service ID
        "template_l1uv52k",  // 🔑 replace with EmailJS Template ID
        form.current,
        "h9YU552fTwD-8x4T8"    // 🔑 replace with EmailJS Public Key
      )
      .then(
        () => {
          showToast("✅ Message sent successfully!");
          form.current?.reset();
        },
        (error) => {
          console.error(error.text);
          showToast("❌ Failed to send message. Try again.");
        }
      )
      .finally(() => setSending(false));
  };

  const showToast = (message: string) => {
    const toast = document.createElement("div");
    toast.className =
      "fixed top-4 right-4 bg-primary text-primary-foreground px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in";
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-6 hover-lift">
              <h3 className="text-xl font-bold mb-4 text-neon">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary">✉</span>
                  </div>
                  <a
                    href="mailto:vaibhavtripathi724@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    vaibhavtripathi724@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary">🌐</span>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/vaibhavtripathi75/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    linkedin.com/in/vaibhavtripathi75
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary">💻</span>
                  </div>
                  <a
                    href="https://github.com/Vaibhav-0111"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    github.com/Vaibhav-0111
                  </a>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 hover-lift">
              <h3 className="text-xl font-bold mb-4 text-neon">Quick Links</h3>
              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary/10"
                  onClick={() => {
                    window.open("/vaibhav-tripathi-cv.html", "_blank");
                  }}
                >
                  Resume
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary/10"
                  onClick={() =>
                    window.open("https://github.com/Vaibhav-0111", "_blank")
                  }
                >
                  GitHub
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary/10"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/vaibhavtripathi75/",
                      "_blank"
                    )
                  }
                >
                  LinkedIn
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="glass border-border/20">
              <CardHeader>
                <CardTitle className="text-foreground">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form ref={form} onSubmit={sendEmail} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      name="from_name"
                      placeholder="First Name"
                      required
                      className="bg-background/50 border-border/30 focus:border-primary"
                    />
                    <Input
                      name="last_name"
                      placeholder="Last Name"
                      className="bg-background/50 border-border/30 focus:border-primary"
                    />
                  </div>
                  <Input
                    type="email"
                    name="from_email"
                    placeholder="Email Address"
                    required
                    className="bg-background/50 border-border/30 focus:border-primary"
                  />
                  <Input
                    name="subject"
                    placeholder="Subject"
                    className="bg-background/50 border-border/30 focus:border-primary"
                  />
                  <Textarea
                    name="message"
                    placeholder="Your message..."
                    rows={5}
                    required
                    className="bg-background/50 border-border/30 focus:border-primary resize-none"
                  />
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      disabled={sending}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan"
                      size="lg"
                    >
                      {sending ? "Sending..." : "Send Message"}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
