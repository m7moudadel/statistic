"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,

  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { useRouter } from "next/navigation"
import { useToast } from "@/components/ui/use-toast"


export function LoginForm() {
  const { toast } = useToast()
  const router=useRouter()



  const formSchema = z.object({
    national_id:z.string().min(14).max(14).describe('National Id'),
  password: z.string().min(2).max(9)
})



const form = useForm<z.infer<typeof formSchema>>({
  resolver: zodResolver(formSchema),
  defaultValues: {
    national_id: "",
    password:""
  },
})

const onSubmit = async (values: z.infer<typeof formSchema>) => {

  const response = await fetch("http://127.0.0.1:8000/api/employees/login" , {
    method:"POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify( {...values} )
  }
  )
  const data =await response.json()
  console.log(data);

  if (data.status===true) {
  router.push('/')
  toast({
    // title:'success',
    variant:"default",
    description:`${data.message}`
  })
  }else{
    toast({
      variant: "destructive",
      title: "Uh oh! Something went wrong.",
      description:`${data.message}`
    })
  }
   


  };




  return (<>

<Form  {...form} >
      <form  onSubmit={form.handleSubmit(onSubmit)} 
      className="basis-96 space-y-8 ">
        <FormField 
          control={form.control}
          name={"national_id"}
          render={({ field }) => (
            <FormItem >
              <FormLabel >
                    {formSchema.shape[field.name].description}
              </FormLabel>
              <FormControl  className="max-w-lg">
                <Input  placeholder="National Id" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name={"password"}
          render={({ field }) => (
            <FormItem>
              <FormLabel>  {formSchema.shape[field.name].description}</FormLabel>
              <FormControl  className="max-w-lg">
                <Input type="password" autoComplete="off" placeholder="password" {...field} />
              </FormControl>
          
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>

  
    </>
  
  )
  
}