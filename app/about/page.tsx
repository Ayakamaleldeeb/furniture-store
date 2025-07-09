"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Heart, Award, Globe, Lightbulb } from "lucide-react";
import Link from "next/link";

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description:
        "Every decision we make starts with our customers in mind. We believe in creating experiences that delight and inspire.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We constantly push boundaries and challenge conventions to bring you the best solutions for modern living.",
    },
    {
      icon: Users,
      title: "Together",
      description:
        "We believe in the power of collaboration and community. Together, we can achieve extraordinary things.",
    },
    {
      icon: Globe,
      title: "Sustainability",
      description:
        "We take responsibility for our impact on the planet and strive to create a positive, sustainable future.",
    },
  ];

  const stats = [
    { number: "50+", label: "Years of Experience" },
    { number: "2M+", label: "Happy Customers" },
    { number: "100+", label: "Countries Served" },
    { number: "15K+", label: "Products Available" },
  ];

  const milestones = [
    {
      year: "1975",
      title: "Company Founded",
      description:
        "Started as a small family business with a vision to make beautiful design accessible to everyone.",
    },
    {
      year: "1985",
      title: "First International Store",
      description:
        "Expanded globally, bringing our philosophy of democratic design to customers worldwide.",
    },
    {
      year: "2000",
      title: "Digital Revolution",
      description:
        "Launched our online presence, making shopping more convenient and accessible than ever.",
    },
    {
      year: "2020",
      title: "Sustainability Focus",
      description:
        "Committed to becoming climate positive and circular, leading the industry in sustainable practices.",
    },
  ];

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}

      <section className="relative bg-black bg-opacity-90 text-white py-20 lg:py-32 border-b border-white/10">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/6438752/pexels-photo-6438752.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white text-black hover:bg-white/90 mb-6">
                About Our Company
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Creating Better
                <span className="text-white block">Everyday Life</span>
              </h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                For over five decades, we have been dedicated to making
                well-designed, functional home furnishing accessible to
                everyone. Our vision is to create a better everyday life for the
                many people.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white hover:text-black"
                >
                  Democratic Design
                </Badge>
                <Badge
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white hover:text-black"
                >
                  Sustainable Living
                </Badge>
                <Badge
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white hover:text-black"
                >
                  Affordable Quality
                </Badge>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                        {stat.number}
                      </div>
                      <div className="text-sm text-white/70">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Our Mission & Vision
            </h2>
            <p className="text-xl text-black/70 max-w-3xl mx-auto">
              We strive to offer a wide range of well-designed, functional home
              furnishing products at prices so low that as many people as
              possible will be able to afford them.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="border border-black/20 shadow-2xl bg-white">
                <CardContent className="p-8">
                  <Target className="w-12 h-12 text-black mb-6" />
                  <h3 className="text-2xl font-bold text-black mb-4">
                    Our Mission
                  </h3>
                  <p className="text-black/70 leading-relaxed mb-6">
                    To create a better everyday life for the many people by
                    offering a wide range of well-designed, functional home
                    furnishing products at prices so low that as many people as
                    possible will be able to afford them.
                  </p>
                  <div className="bg-black p-4 rounded-lg">
                    <p className="text-sm text-white font-medium">
                      We believe that everyone deserves a beautiful home,
                      regardless of budget or circumstances.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card className="border border-black/20 shadow-2xl bg-white">
                <CardContent className="p-8">
                  <Award className="w-12 h-12 text-black mb-6" />
                  <h3 className="text-2xl font-bold text-black mb-4">
                    Our Vision
                  </h3>
                  <p className="text-black/70 leading-relaxed mb-6">
                    To become the leader in life at home by creating a better
                    everyday life for everyone through affordable, sustainable,
                    and well-designed products that inspire and enable people to
                    live better at home.
                  </p>
                  <div className="bg-black p-4 rounded-lg">
                    <p className="text-sm text-white font-medium">
                      Together, we imagine and create a better life at home for
                      everyone, everywhere.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              These values guide everything we do and help us create meaningful
              experiences for our customers and communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300 bg-white hover:bg-black hover:text-white group"
              >
                <CardContent className="p-8 text-center">
                  <div className="bg-black group-hover:bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                    <value.icon className="w-8 h-8 text-white group-hover:text-black transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-black group-hover:text-white mb-4 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-black/70 group-hover:text-white/70 leading-relaxed transition-colors duration-300">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-black/70 max-w-3xl mx-auto">
              From humble beginnings to global presence, here are the key
              milestones that shaped our company.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-black/20"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`w-full max-w-md ${
                      index % 2 === 0 ? "pr-8" : "pl-8"
                    }`}
                  >
                    <Card className="border border-black/20 shadow-2xl bg-white">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <Badge className="bg-black text-white hover:bg-black/90">
                            {milestone.year}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-bold text-black mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-black/70 leading-relaxed">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black rounded-full"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-black text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Create Your Perfect Home?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join millions of customers worldwide who trust us to help them
            create the home of their dreams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-black font-semibold rounded-md hover:bg-white/90 transition-colors duration-200"
            >
              Get In Touch
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-black transition-colors duration-200"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
