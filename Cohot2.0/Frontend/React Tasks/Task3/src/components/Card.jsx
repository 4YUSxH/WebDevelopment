function Card(props) {
  return (
    <div className="w-80 bg-white rounded-xl shadow-[0_8px_25px_rgba(59,130,246,0.35)] overflow-hidden">
      

      <div className="h-40 relative">
        <img
          src={props.cover}
          alt=""
          className="w-full h-full object-cover"
        />


        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden bg-white">
            <img
              src={props.avatar}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>


      <div className="pt-14 px-5 pb-6 text-center">
        <h1 className="font-['Roboto'] text-xl font-medium">
          {props.name}
        </h1>

        <p className="font-['Roboto'] text-sm text-gray-600 mt-2">
          {props.bio}
        </p>


        <div className="flex justify-between mt-5 font-['Roboto']">
          <div>
            <h2 className="font-semibold">{props.likes}</h2>
            <p className="text-xs text-gray-500">Likes</p>
          </div>
          <div>
            <h2 className="font-semibold">{props.posts}</h2>
            <p className="text-xs text-gray-500">Posts</p>
          </div>
          <div>
            <h2 className="font-semibold">{props.views}</h2>
            <p className="text-xs text-gray-500">Views</p>
          </div>
        </div>


        <div className="flex justify-center gap-23 mt-6 text-2xl text-gray-600">
          <i className="ri-instagram-line hover:text-pink-500 transition"></i>
          <i className="ri-twitter-x-line hover:text-black transition"></i>
          <i className="ri-threads-line hover:text-gray-800 transition"></i>
        </div>
      </div>
    </div>
  )
}

export default Card
