import { useRouter } from "next/router"

const index = () => {
  const router = useRouter()
  const addHandler = async (e) => {
    e.preventDefault()
    const form = event.target
    const name = form.name.value
    const image = form.image.value
    const description = form.description.value

    const meetup = { name, image, description }

    const response = await fetch("/api/add-meetup", {
      method: "POST",
      body: JSON.stringify(meetup),
      headers: {
        "Content-Type": "application/json",
      },
    })
    const data = await response.json()

    console.log(data)

    router.push("/")
  }
  return (
    <form
      onSubmit={addHandler}
      className="flex justify-center items-center gap-5 mt-10 flex-col"
    >
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Meetup Name</span>
        </label>
        <input
          type="text"
          name="name"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Image URL</span>
        </label>
        <input
          type="text"
          name="image"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Description</span>
        </label>
        <input
          type="text"
          name="description"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <button className="btn btn-outline btn-primary w-full max-w-xs ">
        Submit
      </button>
    </form>
  )
}

export default index
