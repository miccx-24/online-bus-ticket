import React from 'react';
import Hero from './hero/Hero';
import Search from '../search/Search';
import Category from './category/Category';
import Offer from './offer/Offer';

const HomeContainer = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-100 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4 md:px-12 lg:px-20 py-8 space-y-16">
      {/* Hero Section */}
      <section className="w-full py-12">
        <Hero />
      </section>

      {/* Search Section */}
      <section className="w-full py-8 bg-white dark:bg-neutral-900 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
        <Search />
      </section>

      {/* Category Section */}
      <section className="w-full py-12">
        <Category />
      </section>

      {/* Offer Section */}
      <section className="w-full py-12 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
        <Offer />
      </section>
    </div>
  );
};

export default HomeContainer;
