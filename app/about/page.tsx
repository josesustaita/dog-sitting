import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">About Manny</h1>

      <div className="flex flex-col md:flex-row items-center md:space-x-6">
        {/* Photo of Manny (placeholder) */}
        <div className="relative w-full md:w-1/2 h-64 mb-4 md:mb-0">
          <Image
            src="https://images.unsplash.com/photo-1543466835-00a7907e9de1"
            alt="Manny"
            fill
            className="object-cover rounded shadow"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        {/* Manny's Bio */}
        <div className="md:w-1/2">
          <p className="mb-4">
            Hello! I’m Manny, the proud owner and caretaker at Home Away From Home Doggy Daycare.
            I’ve dedicated my life to ensuring that every dog I look after feels safe, loved, and 
            totally at ease. My passion for animals started in childhood, and over the years, I’ve 
            fostered numerous dogs, volunteered at shelters, and obtained certifications in canine 
            first aid and behavior training.
          </p>
          <p className="mb-4">
            When your dog stays with me, they join my family—enjoying cozy indoor kennels, a safe 
            outdoor play area, and of course, plenty of one-on-one attention. My goal is to provide 
            a true “home away from home,” so you can have peace of mind while you’re away.
          </p>
          <p>
            Thanks for stopping by, and I look forward to welcoming you and your furry companion!
          </p>
        </div>
      </div>
    </div>
  );
}
