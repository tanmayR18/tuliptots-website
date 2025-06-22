import React from "react";

const Blog1 = () => {
  return (
    <div className="min-h-screen  font-fredoka tracking-wide">
      {/* Hero Section */}
      <div className="bg-[#FFE6CC] py-32 lg:pt-44 px-4 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl  text-center font-chewy tracking-[3px] text-gray-800 leading-tight">
            Transitioning from Home to Playgroup: How to Make It Smooth and Happy
          </h1>
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 bg-pink-400 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto py-12 px-4 lg:px-8">
        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8 transform hover:scale-[1.01] transition-transform duration-300">
          <p className="text-lg text-gray-700 leading-relaxed">
            Starting playgroup is a big step — not just for toddlers, but for
            parents too! It's the first time your little one will experience a
            world outside the comfort of home, and it's natural for both of you to
            feel a mix of excitement and nervousness. The good news? With a few
            thoughtful steps, you can make this transition smooth, happy, and full
            of new beginnings.
          </p>
        </div>

        <p className="text-xl font-semibold text-gray-800 mb-8">
          Here's how you can gently prepare your child for this important
          milestone:
        </p>

        {/* Tips Sections */}
        <div className="space-y-8">
          {/* Tip 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-pink-600 mb-4">1. Talk About It Positively</h2>
            <div className="space-y-3 text-gray-700">
              <p className="flex items-start">
                <span className="text-pink-500 mr-2">◆</span>
                Start conversations about playgroup in a cheerful, relaxed way.
              </p>
              <p className="flex items-start">
                <span className="text-pink-500 mr-2">◆</span>
                Talk about new friends, fun activities like painting and singing,
                and exciting things like building towers or splashing in water play.
              </p>
              <p className="flex items-start">
                <span className="text-pink-500 mr-2">◆</span>
                When children hear about school as a place of fun and discovery,
                their curiosity naturally grows. Eg: "At playgroup, you'll get to
                play with so many colorful blocks! I wonder what you'll build
                first?"
              </p>
            </div>
          </div>

          {/* Tip 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-pink-600 mb-4">2. Practice Little Separations</h2>
            <div className="space-y-3 text-gray-700">
              <p className="flex items-start">
                <span className="text-pink-500 mr-2">◆</span>
                If your child hasn't had much time away from you yet, start
                practicing small separations.
              </p>
              <p className="flex items-start">
                <span className="text-pink-500 mr-2">◆</span>
                Short visits to a grandparent's house, playdates with friends, or
                even independent play at home while you're in another room can help
                build their sense of security and independence.
              </p>
              <p className="flex items-start">
                <span className="text-pink-500 mr-2">◆</span>
                Simple games like Peekaboo, Hide and Seek, or even playing
                "Where's your toy?" are wonderful for this stage.
              </p>
            </div>
          </div>

          {/* Tip 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-pink-600 mb-4">3. Create a Predictable Routine</h2>
            <div className="space-y-3 text-gray-700">
              <p className="flex items-start">
                <span className="text-pink-500 mr-2">◆</span>
                Toddlers thrive on routine.
              </p>
              <p className="flex items-start">
                <span className="text-pink-500 mr-2">◆</span>
                In the days leading up to starting playgroup, try to follow a
                simple daily rhythm:
              </p>
              <div className="ml-6 space-y-2">
                <p className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  Wake up around the same time each day
                </p>
                <p className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  Eat breakfast together
                </p>
                <p className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  Get dressed and have some outdoor play
                </p>
              </div>
            </div>
          </div>

          {/* Tip 4 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-pink-600 mb-4">4. Visit Together Before the First Day</h2>
            <div className="space-y-3 text-gray-700">
              <p className="flex items-start">
                <span className="text-pink-500 mr-2">◆</span>
                If possible, visit the playgroup with your child before the
                official start.
              </p>
              <p className="flex items-start">
                <span className="text-pink-500 mr-2">◆</span>
                A chance to explore the classrooms, meet teachers, and see the
                toys and spaces helps turn the unknown into something familiar.
              </p>
            </div>
          </div>

          {/* Tip 5 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-pink-600 mb-4">5. Stay Calm and Consistent</h2>
            <div className="space-y-3 text-gray-700">
              <p className="flex items-start">
                <span className="text-pink-500 mr-2">◆</span>
                It's natural for young children (and parents!) to feel a little
                wobbly during transitions.
              </p>
              <p className="flex items-start">
                <span className="text-pink-500 mr-2">◆</span>
                If your child is teary at drop-off, stay calm, offer a loving
                goodbye, and trust that the teachers will help them settle.
              </p>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="mt-12 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Every Goodbye Leads to a New Adventure</h2>
          <p className="text-gray-700 mb-4">
            While it's never easy to watch your baby take their first steps into the
            wider world, it's also a beautiful beginning — a world of friendships,
            discoveries, and joyful learning.
          </p>
          <p className="text-gray-700">
            At Tulip Tots International, we walk alongside parents and children
            during this important transition, creating a warm and nurturing space
            where every child feels safe, loved, and ready to bloom.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog1;
