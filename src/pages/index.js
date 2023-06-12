import MeetupCard from "@/components/MeetupCard"
import { MongoClient } from "mongodb"

export default function Home({ meetups }) {
  return (
    <div className="grid grid-cols-1 mt-10 md:grid-cols-2 justify-center gap-10">
      {meetups.map((meetup) => (
        <MeetupCard key={meetup.id} meetup={meetup} />
      ))}
    </div>
  )
}

export async function getStaticProps() {
  // fetch data from an API
  const client = await MongoClient.connect(
    "mongodb+srv://redpositive:Ppju5XkgQad4O1Af@cluster0.d0hszsm.mongodb.net/next-meetups?retryWrites=true&w=majority"
  )
  const db = client.db()

  const meetupsCollection = db.collection("meetups")

  const meetups = await meetupsCollection.find().toArray()

  client.close()

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        name: meetup.name,
        description: meetup.description,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  }
}
