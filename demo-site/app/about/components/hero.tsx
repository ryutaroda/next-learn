import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="py-40 flex items-center">
      <div className="container">
        <h1 className="font-bold text-primary/50 text-4xl mb-5 lg:text-6xl">hero</h1>
        <p className="text-muted-foreground mb-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, impedit alias! Veniam facilis magni explicabo iste, veritatis amet laborum repellat officiis adipisci quod impedit rerum ipsam tempora repellendus. Praesentium, sint.
        </p>
        <Button>お問い合わせ</Button>
      </div>

    </div>
  )
}