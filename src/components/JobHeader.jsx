

function JobHeader() {
  return (
    <>
      {/* Banner */}
      <div className="relative h-60">
        <img
          src="/bacimage1.jpg" // replace with actual image path
          alt="Banner"
          className="w-full h-full object-cover rounded-t-2xl"
        />
        <div className="absolute inset-0 bg-blue-700 bg-opacity-60 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Post New Job</h1>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-blue-600 text-white text-center px-8 py-2 text-sm rounded-b-2xl">
        Home &gt; Post New Job
      </div>
    </>
  );
}
export default JobHeader;