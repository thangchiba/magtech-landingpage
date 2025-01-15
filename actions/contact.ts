'use server'

export async function submitContact(formData: FormData) {
  const firstName = formData.get('firstName')
  const lastName = formData.get('lastName')
  const email = formData.get('email')
  const message = formData.get('message')

  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000))

  return { success: true, message: 'お問い合わせありがとうございます。' }
}

