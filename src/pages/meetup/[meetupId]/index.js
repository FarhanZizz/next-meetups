import { MongoClient, ObjectId } from "mongodb"
import Link from "next/link"
import { useRouter } from "next/router"

const index = ({ meetupData }) => {
  const router = useRouter()
  const meetupId = router.query.meetupId
  return (
    <div className="card w-3/4 mx-auto mt-10 lg:card-side rounded-none">
      <figure className="flex-1">
        <img className="w-96 " src={meetupData.image} alt="Album" />
      </figure>
      <div className="card-body flex-1">
        <h2 className="card-title">{meetupData.name}</h2>
        <p>{meetupData.description}</p>
        <div className="card-actions justify-end">
          <Link href="/" className="btn btn-primary btn-outline">
            Go Back
          </Link>
        </div>
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://redpositive:Ppju5XkgQad4O1Af@cluster0.d0hszsm.mongodb.net/next-meetups?retryWrites=true&w=majority"
  )
  const db = client.db()

  const meetupsCollection = db.collection("meetups")

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray()

  client.close()

  return {
    fallback: "blocking",
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  }
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId

  const client = await MongoClient.connect(
    "mongodb+srv://redpositive:Ppju5XkgQad4O1Af@cluster0.d0hszsm.mongodb.net/next-meetups?retryWrites=true&w=majority"
  )
  const db = client.db()

  const meetupsCollection = db.collection("meetups")

  const selectedMeetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  })

  client.close()

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        name: selectedMeetup.name,
        description: selectedMeetup.description,
        image: selectedMeetup.image,
      },
    },
  }
}

export default index
