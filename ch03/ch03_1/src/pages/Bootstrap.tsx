export default function Bootstrap() {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="htmlform-label">
          Email address
        </label>
        <input
          type="email"
          className="htmlform-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" className="htmlform-text" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="htmlhtmlform-label">
          password
        </label>
        <input
          type="password"
          className="htmlhtmlform-control"
          id="exampleInputPassword1"
        />
      </div>
      <div className="mb-3 htmlhtmlform-check">
        <input
          type="checkbox"
          className="htmlhtmlform-check-input"
          id="exampleCheck1"
        />
        <label className="htmlhtmlform-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  )
}
