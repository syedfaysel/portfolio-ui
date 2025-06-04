import { Mail, MapPin, Phone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import ContactForm from "@/components/contact-form"

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-12">
      <h1 className="mb-8 text-center text-4xl font-bold md:text-5xl">Contact Me</h1>
      <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
        Have a question or want to work together? Feel free to reach out!
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="mb-6 text-2xl font-bold">Get in Touch</h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="flex items-center gap-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground">your.email@example.com</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center gap-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center gap-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-muted-foreground">San Francisco, CA</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <h2 className="mb-6 text-2xl font-bold">Send a Message</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
