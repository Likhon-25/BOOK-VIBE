import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { bookId: bookParamsId } = useParams();

  console.log(typeof bookParamsId, bookParamsId);

  const books = useLoaderData();
  console.log("books", books);
  const exceptedBook = books.find(
    (book) => book.bookId === Number(bookParamsId),
  );
  console.log(exceptedBook, "exceptedBooks");

  if (!exceptedBook) return <div>Book not found!</div>;

  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = exceptedBook;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 container mx-auto my-10 p-5">
      {/* Image Section - Background color added for styling */}
      <div className="bg-gray-100 p-16 rounded-2xl flex justify-center items-center">
        <img
          src={image}
          alt={bookName}
          className="h-[400px] shadow-xl rounded-lg object-contain"
        />
      </div>

      {/* Details Section */}
      <div className="space-y-4">
        <h2 className="text-4xl font-bold font-serif">{bookName}</h2>
        <p className="text-xl font-medium text-gray-700">By: {author}</p>

        <div className="divider"></div>
        <p className="text-xl text-gray-600">{category}</p>
        <div className="divider"></div>

        <p className="leading-relaxed">
          <span className="font-bold">Review: </span> {review}
        </p>

        <div className="flex items-center gap-4">
          <span className="font-bold">Tag</span>
          {tags.map((tag, ind) => (
            <div
              key={ind}
              className="badge bg-green-50 text-green-500 py-3 px-4 border-none font-bold"
            >
              #{tag}
            </div>
          ))}
        </div>

        <div className="divider"></div>

        {/* Info Table Style */}
        <div className="space-y-3 max-w-sm">
          <div className="grid grid-cols-2">
            <span className="text-gray-500">Number of Pages:</span>
            <span className="font-bold">{totalPages}</span>
          </div>
          <div className="grid grid-cols-2">
            <span className="text-gray-500">Publisher:</span>
            <span className="font-bold">{publisher}</span>
          </div>
          <div className="grid grid-cols-2">
            <span className="text-gray-500">Year of Publishing:</span>
            <span className="font-bold">{yearOfPublishing}</span>
          </div>
          <div className="grid grid-cols-2">
            <span className="text-gray-500">Rating:</span>
            <span className="font-bold">{rating}</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4 pt-4">
          <button className="btn btn-outline border-gray-300 px-8 hover:bg-black hover:text-white transition-all capitalize">
            Read
          </button>
          <button className="btn bg-[#50B1C1] text-white px-8 hover:bg-[#3d8e9b] border-none capitalize">
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
