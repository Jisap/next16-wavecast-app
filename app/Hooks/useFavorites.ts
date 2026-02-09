"use client"

import { useState, useEffect } from "react"
import toast from "react-hot-toast"

export type Episode = {
  id: number;
  image: string;
  name: string;
  time: string;
  title: string;
  pere: string;
  episode: string;
}

export const useFavorites = () => {
  const [mounted, setMounted] = useState(false);
  const [favorites, setFavorites] = useState<Episode[]>([]);

  // 1. Cargar datos de localStorage después del primer render (montaje)
  useEffect(() => {
    const stored = localStorage.getItem("favoriteEpisodes");
    if (stored) {
      try {
        setFavorites(JSON.parse(stored));
      } catch (error) {
        console.error("Error parsing favorites from localStorage", error);
      }
    }
    setMounted(true);
  }, []);

  // 2. Persistencia automática
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("favoriteEpisodes", JSON.stringify(favorites));
    }
  }, [favorites, mounted]);

  const toggleFavorite = (episode: Episode) => {
    const isFav = favorites.some((fav) => fav.id === episode.id);
    if (isFav) {
      setFavorites((prev) => prev.filter((fav) => fav.id !== episode.id));
      toast.success(`'${episode.title}' eliminado de favoritos`, {
        icon: '🗑️',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
    } else {
      setFavorites((prev) => [...prev, episode]);
      toast.success(`'${episode.title}' añadido a favoritos`, {
        icon: '❤️',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
    }
  };

  const isFavorite = (id: number) => {
    return favorites.some((fav: Episode) => fav.id === id);
  };

  return { favorites, toggleFavorite, isFavorite, mounted };
};
