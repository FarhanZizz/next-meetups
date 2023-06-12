import Link from "next/link"

const MeetupCard = ({ meetup }) => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl rounded">
      <figure>
        <img
          className="object-cover h-72 w-80 "
          src={meetup.image}
          alt="Album"
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{meetup.name}</h2>
        <p>{meetup.description}</p>
        <div className="card-actions justify-center">
          <Link
            href={`/meetup/${meetup.id}`}
            className="btn btn-primary w-full btn-outline"
          >
            Show details
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MeetupCard
