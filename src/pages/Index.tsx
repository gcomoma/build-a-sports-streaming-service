
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Play, Clock, Users, Calendar } from 'lucide-react';

export default function Index() {
  const featuredStream = {
    title: 'UEFA Champions League Final',
    teams: 'Real Madrid vs Manchester City',
    category: 'Football',
    viewers: '2.4M',
    thumbnail: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=1920&h=1080&fit=crop',
    isLive: true,
  };

  const liveStreams = [
    {
      id: 1,
      title: 'NBA Finals Game 7',
      teams: 'Lakers vs Celtics',
      category: 'Basketball',
      viewers: '1.8M',
      thumbnail: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=600&fit=crop',
      isLive: true,
    },
    {
      id: 2,
      title: 'Wimbledon Semi-Final',
      teams: 'Djokovic vs Alcaraz',
      category: 'Tennis',
      viewers: '890K',
      thumbnail: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800&h=600&fit=crop',
      isLive: true,
    },
    {
      id: 3,
      title: 'IPL Cricket Match',
      teams: 'Mumbai vs Chennai',
      category: 'Cricket',
      viewers: '3.2M',
      thumbnail: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&h=600&fit=crop',
      isLive: true,
    },
    {
      id: 4,
      title: 'Formula 1 Monaco GP',
      teams: 'Qualifying Session',
      category: 'Racing',
      viewers: '1.2M',
      thumbnail: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&h=600&fit=crop',
      isLive: true,
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Super Bowl LVIII',
      date: '2026-02-23',
      time: '18:30',
      category: 'Football',
      thumbnail: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400&h=300&fit=crop',
    },
    {
      id: 2,
      title: 'World Cup Qualifier',
      date: '2026-02-25',
      time: '20:00',
      category: 'Football',
      thumbnail: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=400&h=300&fit=crop',
    },
    {
      id: 3,
      title: 'NBA All-Star Game',
      date: '2026-02-28',
      time: '19:00',
      category: 'Basketball',
      thumbnail: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=400&h=300&fit=crop',
    },
  ];

  const categories = [
    { name: 'Football', icon: '⚽', count: 45 },
    { name: 'Basketball', icon: '🏀', count: 32 },
    { name: 'Tennis', icon: '🎾', count: 18 },
    { name: 'Cricket', icon: '🏏', count: 24 },
    { name: 'Racing', icon: '🏎️', count: 12 },
    { name: 'Boxing', icon: '🥊', count: 8 },
  ];

  return (
    <Layout>
      {/* Hero Section - Featured Live Stream */}
      <section className="relative h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${featuredStream.thumbnail})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>
        <div className="relative container h-full flex items-end pb-16">
          <div className="max-w-2xl space-y-4">
            <div className="flex items-center gap-3">
              <Badge className="bg-destructive text-destructive-foreground gap-1.5 px-3 py-1">
                <span className="w-2 h-2 rounded-full bg-destructive-foreground animate-pulse" />
                LIVE
              </Badge>
              <Badge variant="secondary">{featuredStream.category}</Badge>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Users className="w-4 h-4" />
                {featuredStream.viewers} watching
              </div>
            </div>
            <h1 className="text-5xl font-bold">{featuredStream.title}</h1>
            <p className="text-xl text-muted-foreground">{featuredStream.teams}</p>
            <div className="flex gap-3">
              <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
                <Play className="w-5 h-5 fill-current" />
                Watch Now
              </Button>
              <Button size="lg" variant="secondary" className="gap-2">
                <Calendar className="w-5 h-5" />
                Set Reminder
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container py-12">
        <h2 className="text-2xl font-bold mb-6">Browse by Sport</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Card key={category.name} className="hover-lift cursor-pointer bg-card border-border">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-2">{category.icon}</div>
                <h3 className="font-semibold mb-1">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.count} events</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Live Now */}
      <section className="container py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Live Now</h2>
          <Button variant="ghost">View All</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {liveStreams.map((stream) => (
            <Card key={stream.id} className="hover-lift cursor-pointer overflow-hidden bg-card border-border group">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={stream.thumbnail}
                  alt={stream.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <Badge className="absolute top-3 left-3 bg-destructive text-destructive-foreground gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-destructive-foreground animate-pulse" />
                  LIVE
                </Badge>
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="flex items-center gap-1.5 text-xs text-white mb-1">
                    <Users className="w-3 h-3" />
                    {stream.viewers}
                  </div>
                </div>
                <Button
                  size="icon"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full opacity-0 group-hover:opacity-100 transition-opacity bg-primary hover:bg-primary/90"
                >
                  <Play className="w-6 h-6 fill-current" />
                </Button>
              </div>
              <CardContent className="p-4">
                <Badge variant="secondary" className="mb-2">
                  {stream.category}
                </Badge>
                <h3 className="font-semibold mb-1">{stream.title}</h3>
                <p className="text-sm text-muted-foreground">{stream.teams}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="container py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Upcoming Events</h2>
          <Button variant="ghost">View Schedule</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upcomingEvents.map((event) => (
            <Card key={event.id} className="hover-lift cursor-pointer overflow-hidden bg-card border-border group">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={event.thumbnail}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 text-white text-sm">
                  <Clock className="w-4 h-4" />
                  <span>{event.date} • {event.time}</span>
                </div>
              </div>
              <CardContent className="p-4">
                <Badge variant="secondary" className="mb-2">
                  {event.category}
                </Badge>
                <h3 className="font-semibold">{event.title}</h3>
                <Button variant="ghost" size="sm" className="mt-2 w-full gap-2">
                  <Calendar className="w-4 h-4" />
                  Set Reminder
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </Layout>
  );
}