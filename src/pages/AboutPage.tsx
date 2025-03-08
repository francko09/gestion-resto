import React from 'react';
import { Clock, Users, Award, Leaf } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Notre Histoire
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Depuis 2010, nous partageons notre passion pour la gastronomie française avec nos clients.
          Notre restaurant est né d'un rêve : celui de créer un lieu où tradition et innovation se rencontrent.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Horaires</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Ouvert 7j/7<br />
            12h - 14h30<br />
            19h - 22h30
          </p>
        </div>

        <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Notre Équipe</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Une équipe passionnée<br />
            de 15 professionnels<br />
            à votre service
          </p>
        </div>

        <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Récompenses</h3>
          <p className="text-gray-600 dark:text-gray-300">
            2 étoiles au guide<br />
            Meilleur restaurant 2023<br />
            Prix d'excellence
          </p>
        </div>

        <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <Leaf className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Nos Valeurs</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Produits locaux<br />
            Agriculture durable<br />
            Zéro déchet
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <img
            src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf"
            alt="Notre restaurant"
            className="rounded-lg shadow-lg w-full h-96 object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Une Cuisine d'Exception
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Notre chef étoilé et son équipe créent des plats qui allient tradition française
            et créativité moderne. Chaque assiette est pensée comme une œuvre d'art,
            mettant en valeur les meilleurs produits de notre région.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Nous sélectionnons rigoureusement nos fournisseurs locaux pour vous garantir
            une qualité exceptionnelle et une traçabilité parfaite de nos produits.
            Notre cave à vin recèle des trésors qui sauront accompagner parfaitement vos mets.
          </p>
        </div>
      </div>

      <div className="bg-blue-50 dark:bg-gray-800 rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Réservez Votre Table
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Pour une expérience gastronomique inoubliable, réservez votre table
          dès maintenant et laissez-nous prendre soin de vous.
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
          Réserver une table
        </button>
      </div>
    </div>
  );
}