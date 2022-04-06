import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: "htfg90et",
    dataset: "portfolio_new",
    apiVersion: "2020-02-01",
    useCdn: true,
    token: "skh7k0SxeAZCW5GgHjugkluQKFyYaM1vfa55eNuPdtTqTYseWCwTjzNYCATYeeuZMtmSUu1wNRSxfONYswmMT1wBepfIyaYEDdQxEDGB5GmZdlFPWzevI8OyqarZF5QbI9rGrZuJvS3I49tkb9Jfk29eG3SniZ3ieJ6HkKlE61vSxN6SywHF"
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)