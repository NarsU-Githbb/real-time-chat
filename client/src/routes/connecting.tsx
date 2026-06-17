import { createFileRoute } from '@tanstack/react-router'
import { useForm } from "@tanstack/react-form"
import { toast } from "sonner" //This is a direct trigger function to launch temporary alert notifications.
import * as z from "zod" //zod is a validation tool for the username

// Import your primitives from the UI folder
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"


const formSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters.")
    .max(10, "Username must be at most 10 characters.")
    .regex(/^[a-zA-Z0-9_]+$/, "Only letters, numbers, and underscores allowed."),
})

export const Route = createFileRoute('/connecting')({
  component: connection,
})

function connection() {

  const form = useForm({
    defaultValues: {
      username: "",
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      toast("Form successfully submitted!", {
        description: `Logged username: ${value.username}`,
        position: "bottom-right",
      })
    },
  })


  return (    
  <div className="flex-col justify-center items-center h-screen p-6 mt-25 w-full max-w-md mx-auto">
  
          
          <div className="pl-3 mb-20">
            {/* --- CARD TWO STEP --- */}
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Welcome to the Name-Questionnaire!</CardTitle>
              </CardHeader>
              <CardContent>
                <form
                  id="questionnaire-form"
                  onSubmit={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    form.handleSubmit()
                  }}
                >
                  <FieldGroup>
                    <form.Field
                      name="username"
                      children={(field) => {
                        const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
                        return (
                          <Field data-invalid={isInvalid}>
                            <FieldLabel htmlFor="q-username">Username</FieldLabel>
                            <Input
                              id="q-username"
                              name={field.name}
                              value={field.state.value}
                              onBlur={field.handleBlur}
                              onChange={(e) => field.handleChange(e.target.value)}
                              aria-invalid={isInvalid}
                              placeholder="Type here..."
                            />
                            <FieldDescription>This name will identify your account.</FieldDescription>
                            {isInvalid && <FieldError errors={field.state.meta.errors} />}
                          </Field>
                        )
                      }}
                    />
                  </FieldGroup>
                </form>
              </CardContent>
              <CardFooter>
                <Field orientation="horizontal" className="w-full justify-end gap-2">
                  <Button type="button" variant="outline" onClick={() => form.reset()}>Reset</Button>
                  <Button type="submit" form="questionnaire-form">
                    <a href="./chat">Start Chat</a>
                    </Button>
                </Field>
              </CardFooter>
            </Card> 
          </div>
          </div>
          )
}
