const Card = ({ title, description, image, topic }) => {
    return (
     
<article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg w-72 my-2">
<img
  alt={title}
  src={image}
  className="h-56 w-full object-cover"
/>

<div className="bg-white p-4 sm:p-6">
  <a href="#">
    <h3 className="mt-0.5 text-lg text-gray-900">{topic}</h3>
  </a>

  <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
   {description}
  </p>
</div>
</article>
    );
};

export default Card;