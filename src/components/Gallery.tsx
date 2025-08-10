import { Camera, ZoomIn } from 'lucide-react';

const Gallery = () => {
    // Gallery images from public/images/photos directory
    const galleryImages = [
        {
            id: 1,
            src: '/images/photos/2ndschool.jpg',
            alt: 'Second School Project',
            category: 'Education'
        },
        {
            id: 2,
            src: '/images/photos/bjp-minister.jpg',
            alt: 'BJP Minister Event',
            category: 'Events'
        },
        {
            id: 3,
            src: '/images/photos/console.jpg',
            alt: 'Console Technology',
            category: 'Technology'
        },
        {
            id: 4,
            src: '/images/photos/fast.jpg',
            alt: 'Fast Solutions',
            category: 'Innovation'
        },
        {
            id: 5,
            src: '/images/photos/isjrali-amba.jpg',
            alt: 'Isjrali Amba Project',
            category: 'Projects'
        },
        {
            id: 6,
            src: '/images/photos/monocapter.JPG',
            alt: 'Monocapter Drone',
            category: 'Drones'
        },
        {
            id: 7,
            src: '/images/photos/ourbist.jpg',
            alt: 'Our Best Work',
            category: 'Showcase'
        },
        {
            id: 8,
            src: '/images/photos/product show case.jpg',
            alt: 'Product Showcase',
            category: 'Products'
        },
        {
            id: 9,
            src: '/images/photos/productdrone.jpg',
            alt: 'Product Drone',
            category: 'Drones'
        },
        {
            id: 10,
            src: '/images/photos/productshowcase.jpg',
            alt: 'Product Showcase Display',
            category: 'Products'
        },
        {
            id: 11,
            src: '/images/photos/Seaneer sin.jpg',
            alt: 'Seaneer Sin Project',
            category: 'Projects'
        },
        {
            id: 12,
            src: '/images/photos/study-dav.jpg',
            alt: 'Study DAV Initiative',
            category: 'Education'
        },
        {
            id: 13,
            src: '/images/photos/testproduct.jpg',
            alt: 'Test Product',
            category: 'Testing'
        },
        {
            id: 14,
            src: '/images/photos/vitel.jpg',
            alt: 'Vitel Project',
            category: 'Projects'
        },
        {
            id: 15,
            src: '/images/photos/hackthion.jpg',
            alt: 'Hackathon Event',
            category: 'Events'
        },
        {
            id: 16,
            src: '/images/photos/mane-drone.jpg',
            alt: 'Mane Drone Project',
            category: 'Drones'
        },
        {
            id: 17,
            src: '/images/photos/rcmak.jpg',
            alt: 'RC MAK Project',
            category: 'Projects'
        }
    ];

    return (
        <section id="gallery" className="py-20 bg-slate-800">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center mb-4">
                        <Camera className="w-8 h-8 text-orange-400 mr-3" />
                        <h2 className="text-4xl font-bold text-white">Our Gallery</h2>
                    </div>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                        Take a glimpse into our creative process, workspace, and the moments that define our journey
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">
                    {galleryImages.map((image, index) => (
                        <div
                            key={image.id}
                            className={`
                group relative overflow-hidden rounded-xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:z-10
                ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}
                ${index === 4 ? 'lg:col-span-2' : ''}
                ${index === 2 ? 'md:row-span-2' : ''}
                ${index === 7 ? 'lg:row-span-2' : ''}
              `}
                        >
                            {/* Image */}
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <span className="inline-block px-3 py-1 bg-orange-500 text-white text-sm rounded-full mb-2">
                                        {image.category}
                                    </span>
                                    <h3 className="text-white font-semibold text-lg">{image.alt}</h3>
                                </div>

                                {/* Zoom Icon */}
                                <div className="absolute top-4 right-4">
                                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                        <ZoomIn className="w-5 h-5 text-white" />
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Border */}
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-400/50 rounded-xl transition-colors duration-300"></div>
                        </div>
                    ))}
                </div>

                {/* View More Button */}
                <div className="text-center mt-12">
                    <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-amber-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-amber-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                        View More Photos
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Gallery;