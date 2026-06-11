import { createFileRoute } from '@tanstack/react-router'
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Textarea } from "@/components/ui/textarea"

export const Route = createFileRoute('/chat')({
  component: Chat,
})

function Chat() {
  return ( 
    <>
    <Field className="flex flex-col h-screen max-h-screen pt-5 px-8 overflow-hidden box-border">
     <Textarea 
          id="chat-screen" 
          placeholder="Let the interaction begin!" 
          readOnly 
          className="flex-1 w-full border rounded-xl bg-background text-foreground resize-none focus:outline-none min-h-0" 
        />
        
  
      <FieldLabel htmlFor="textarea-message" className="text-lg font-semibold text-foreground ml-1">Message</FieldLabel>
      <FieldDescription className="ml-1">Enter your message below.</FieldDescription>
      <Textarea id="textarea-message" placeholder="Type your message here." />
       <button className="w-fit px-3 py-1.5 text-sm rounded-full bg-blue-500 hover:bg-blue-700 text-white font-medium self-start transition-colors mb-8">
       Send
       </button>
    </Field>
    </>
)
}
