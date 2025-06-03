import PostPreviewCard from './PostPreviewCard'

const PostPreview = () => {
    const categories = [
    {
      title: 'Healthcare',
      articleCount: 3,
      description: 'Discover the latest technologies revolutionizing healthcare, from advanced design to innovative software.'
    },
    {
      title: 'Insurance',
      articleCount: 6,
      description: 'Explore technological transformations optimizing processes in the insurance industry.'
    }, 
    {
      title: 'Tourism',
      articleCount: 6,
      description: 'Check the improvements in website design tailored for the dynamic tourism industry.'
    },
    {
      title: 'E-learning',
      articleCount: 6,
      description: 'Stay updated on technologies shaping the future of online learning and professional development.'
    },
    {
      title: 'Healthcare',
      articleCount: 3,
      description: 'Discover the latest technologies revolutionizing healthcare, from advanced design to innovative software.'
    },
    {
      title: 'Insurance',
      articleCount: 6,
      description: 'Explore technological transformations optimizing processes in the insurance industry.'
    }
  ];

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto md:px-24">
        <div className="flex text-center mb-12 justify-center">
          <h1 className="text-3xl relative font-bold text-gray-900 mb-2">Categories</h1>
          <hr className='absolute border-3 w-[5%] rounded-full my-12 border-blue-500'/>

        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <PostPreviewCard key={index}
                title={category.title}
                articleCount={category.articleCount}
                description={category.description}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PostPreview
