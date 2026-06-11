import { createFileRoute } from '@tanstack/react-router'
import WaitingLobbyIcon from '@/components/WaitingIcon'
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"


export const Route = createFileRoute('/lobby')({
  component: Lobbying,
})

function Lobbying() {
  return (
    
    <div className="flex-col justify-center items-center h-screen p-6 mt-25 w-full max-w-md mx-auto overflow-hidden">
      <p className="text-green-600 font-semibold mb-10">Connected! Starting chat...</p>
              <Card className="w-full gap-x-80">
                <CardHeader>
                  <CardTitle>Chat Lobby</CardTitle>
                </CardHeader>
                <CardContent>
                  <Field>
                    <FieldLabel htmlFor="q-username">Matching you with a chat partner...</FieldLabel>
                    </Field>
          {/* Use the component here */}
          <WaitingLobbyIcon />
          </CardContent> 
          <CardFooter>
                        <Field orientation="horizontal" className="w-full justify-end gap-2">
                          <Button type="button" variant="outline">Cancel</Button>
                        </Field>
                        </CardFooter>
          </Card>
        </div>
   
        
   

  )
};