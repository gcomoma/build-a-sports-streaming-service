
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Play, Users, Filter } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function Live() {
  const liveGames = [
    {
      id: 1,
      title: 'UEFA Champions League Final',
      teams: 'Real Madrid vs Manchester City',
      category: 'Football',
      league: 'UEFA Champions League',
      viewers: '2.4M',
      thumbnail: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&h=600&fit=crop',
      time: 'Live • 67:32',
      score: '2-1',
    },
    {
      id: 2,
      title: 'NBA Finals Game 7',
      teams: 'Lakers vs Celtics',
      category: 'Basketball',
      league: 'NBA',
      viewers: '1.8M',
      thumbnail: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=600&fit=crop',
      time: 'Live • Q3 8:45',
      score: '89-92',
    },
    {
      id: 3,
      title: 'Wimbledon Semi-Final',
      teams: 'Djokovic vs Alcaraz',
      category: 'Tennis',
      league: 'Wimbledon',
      viewers: '890K',
      thumbnail: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800&h=600&fit=crop',
      time: 'Live • Set 3',
      score: '6-4, 4-6, 3-2',
    },
    {
      id: 4,
      title: 'IPL Cricket Match',
      teams: 'Mumbai Indians vs Chennai Super Kings',
      category: 'Cricket',
      league: 'IPL',
      viewers: '3.2M',
      thumbnail: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&h=600&fit=crop',
      time: 'Live • Over 15.3',
      score: '142/3',
    },
    {
      id: 5,
      title: 'Formula 1 Monaco GP',
      teams: 'Qualifying Session',
      category: 'Racing',
      league: 'Formula 1',
      viewers: '1.2M',
      thumbnail: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&h=600&fit=crop',
      time: 'Live • Q2',
      score: 'Lap 12/18',
    },
    {
      id: 6,
      title: 'Premier League',
      teams: 'Arsenal vs Liverpool',
      category: 'Football',
      league: 'Premier League',
      viewers: '1.9M',
      thumbnail: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&h=600&fit=crop',
      time: 'Live • 34:12',
      score: '1-0',
    },
    {
      id: 7,
      title: 'UFC Fight Night',
      teams: 'Main Event',
      category: 'MMA',
      league: 'UFC',
      viewers: '756K',
      thumbnail: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800&h=600&fit=crop',
      time: 'Live • Round 2',
      score: '1-0',
    },
    {
      id: 8,
      title: 'La Liga',
      teams: 'Barcelona vs Atletico Madrid',
      category: 'Football',
      league: 'La Liga',
      viewers: '1.5M',
      thumbnail: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop',
      time: 'Live • 78:45',
      score: '2-2',
    },
    {
      id: 9,
      title: 'NHL Playoffs',
      teams: 'Maple Leafs vs Bruins',
      category: 'Hockey',
      league: 'NHL',
      viewers: '645K',
      thumbnail: 'https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=800&h=600&fit=crop',
      time: 'Live • P2 12:34',
      score: '3-2',
    },
    {
      id: 10,
      title: 'MLB World Series',
      teams: 'Yankees vs Dodgers',
      category: 'Baseball',
      league: 'MLB',
      viewers: '892K',
      thumbnail: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=800&h=600&fit=crop',
      time: 'Live • Top 7th',
      score: '4-3',
    },
    {
      id: 11,
      title: 'Australian Open',
      teams: "Women's Final",
      category: 'Tennis',
      league: 'Australian Open',
      viewers: '723K',
      thumbnail: 'https://images.unsplash.com/photo-1622163642998-1ea32b0bbc67?w=800&h=600&fit=crop',
      time: 'Live • Set 2',
      score: '6-3, 2-4',
    },
    {
      id: 12,
      title: 'Serie A',
      teams: 'Inter Milan vs AC Milan',
      category: 'Football',
      league: 'Serie A',
      viewers: '1.1M',
      thumbnail: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&h=600&fit=crop',
      time: 'Live • 56:23',
      score: '1-1',
    },
  ];

  const categories = ['All', 'Football', 'Basketball', 'Tennis', 'Cricket', 'Racing', 'MMA', 'Hockey', 'Baseball'];

  return (
    <Layout>
      <div className="container py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-3 h-3 rounded-full bg-destructive animate-pulse" />
            <h1 className="text-4xl font-bold">Live Now</h1>
          </div>
          <p className="text-muted-foreground">
            Watch {liveGames.length} live games happening right now
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Tabs defaultValue="All" className="flex-1">
            <TabsList className="w-full sm:w-auto flex-wrap h-auto">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category} className="flex-shrink-0">
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <div className="flex gap-2">
            <Select defaultValue="viewers">
              <SelectTrigger className="w-[180px] bg-secondary border-border">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="viewers">Most Viewers</SelectItem>
                <SelectItem value="recent">Recently Started</SelectItem>
                <SelectItem value="ending">Ending Soon</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon" className="border-border">
              <Filter className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Live Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {liveGames.map((game) => (
            <Card
              key={game.id}
              className="hover-lift cursor-pointer overflow-hidden bg-card border-border group"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={game.thumbnail}
                  alt={game.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Live Badge */}
                <Badge className="absolute top-3 left-3 bg-destructive text-destructive-foreground gap-1.5 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-destructive-foreground animate-pulse" />
                  LIVE
                </Badge>

                {/* Viewers Count */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-xs text-white">
                  <Users className="w-3 h-3" />
                  {game.viewers}
                </div>

                {/* Score & Time */}
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="flex items-center justify-between text-white text-sm font-semibold mb-1">
                    <span className="bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded">
                      {game.time}
                    </span>
                    <span className="bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded">
                      {game.score}
                    </span>
                  </div>
                </div>

                {/* Play Button Overlay */}
                <Button
                  size="icon"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full opacity-0 group-hover:opacity-100 transition-opacity bg-primary hover:bg-primary/90"
                >
                  <Play className="w-7 h-7 fill-current text-primary-foreground" />
                </Button>
              </div>

              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {game.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{game.league}</span>
                </div>
                <h3 className="font-semibold mb-1 line-clamp-1">{game.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-1">{game.teams}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="flex justify-center mt-12">
          <Button variant="outline" size="lg" className="border-border">
            Load More Games
          </Button>
        </div>
      </div>
    </Layout>
  );
}