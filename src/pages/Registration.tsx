const Registration = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-blue-900 mb-4">Registration</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Register now for Netlify SKO 2025 in Denver, Colorado
        </p>
      </div>
      <div className="bg-white rounded-lg shadow-xl p-8 lodge-bg-pattern">
        <div className="flex justify-center">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdDGGgmIzCGLIwOFDgtt23g803QneLr7tTzMxYEoa79i0G2eQ/viewform?embedded=true"
            width="100%"
            height="1353"
            frameBorder="0"
            className="max-w-5xl"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default Registration;