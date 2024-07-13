import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { createClient } from "@/lib/supabase/server";
import { ChevronLeft, Tv } from "lucide-react";
import Link from "next/link";

export default async function VideoPage({
  params,
}: {
  params: { slug: string };
}) {
  const client = createClient();
  const { slug } = params;

  const { data: project } = await client
    .from("projects")
    .select()
    .eq("id", slug)
    .single();

  return (
    <section className="relative">
      <div className="video-section relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/60 z-10"></div>
        <div className="absolute top-4 left-4 z-20">
          <Link className="flex items-center gap-x-2 text-white" href="/">
            <ChevronLeft />
            Projekte
          </Link>
        </div>
        <video
          className="relative h-[calc(100vh_-_4rem)] w-full object-cover"
          autoPlay
          controls
          muted
          poster="/placeholder.svg"
        >
          <source src={project?.video_url} type="video/mp4" />
        </video>

        <div className="absolute bottom-0 left-0 p-10 z-20 text-white">
          <div className="editorial flex flex-col gap-3">
            <div className="badges flex items-center gap-2">
              <Badge className="w-fit text-white text-xs" variant="outline">
                ULTRA HD
              </Badge>
              <Badge className="w-fit text-white text-xs" variant="outline">
                DRONE
              </Badge>
            </div>
            <h1 className="font-black text-5xl">{project?.title}</h1>
            <p className="line-clamp-2 opacity-80">{project?.description}</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl py-14 grid grid-cols-[5fr,3fr] gap-8 relative">
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
            molestiae, ipsam perferendis eos dolores enim quae a nihil deserunt
            nemo obcaecati vitae iusto alias voluptatem? Qui cum accusamus
            deserunt vitae ipsa ipsum alias debitis labore nostrum! Nulla,
            animi! Rerum vitae suscipit iusto architecto! Facere blanditiis
            fugiat eos non vitae ut. Consectetur accusantium nam nostrum omnis
            quibusdam sed quae, repellat error laborum rem eum vitae, dolor
            sequi modi cum laboriosam natus at. Quam aliquid voluptatem sapiente
            minus consequuntur possimus, doloribus placeat molestiae quisquam
            sunt, esse modi vitae libero impedit! Omnis deserunt quae dolorem
            saepe quo error, neque, excepturi accusamus facere aliquid officiis
            ipsam! Nihil ab natus, debitis, neque nostrum modi reiciendis,
            expedita eum eaque maiores accusamus dicta quaerat deleniti!
            Deleniti, adipisci. Ullam pariatur soluta et placeat. Culpa aliquam
            quaerat praesentium libero quibusdam dolor vitae, sapiente
            aspernatur sed, iure officiis eaque ducimus similique explicabo
            dolores iusto fuga. Sapiente dolorem et ut veniam quasi quam
            reiciendis, deleniti eos odio amet ea. Vero nesciunt ratione, ad
            modi deleniti illum eligendi tempora provident ex qui totam hic
            quidem eveniet minus dignissimos reiciendis! In qui accusantium
            incidunt! Pariatur numquam non reprehenderit quae corrupti facere
            quos ad assumenda temporibus doloribus expedita saepe vel autem,
            laborum inventore necessitatibus. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Provident voluptatum tempora
            inventore, non delectus maiores ipsam maxime officia est dolore
            vitae. Nulla accusamus tenetur saepe repudiandae, magnam optio
            temporibus natus ex, animi nisi debitis non explicabo vero dolor
            ratione adipisci a aliquid iure voluptatum vitae? Unde natus cumque
            placeat maxime rem tempora culpa aspernatur blanditiis sed suscipit
            tempore accusamus, sequi quam dolores, repellendus sit. Incidunt,
            illo consequatur dignissimos nisi ipsam culpa sapiente dolorum.
            Officia eos vel corporis sint ab iure, necessitatibus aperiam
            doloremque, quos, rem explicabo voluptate? Ab vitae eveniet
            assumenda fugiat quaerat, aut atque placeat quod rerum dolor? Illo
            nihil ex sequi impedit unde in repudiandae quis, cum quidem delectus
            et explicabo perferendis? Unde iste, maxime corporis earum veniam
            quas aliquid minus quaerat esse voluptatem id, totam eligendi
            placeat sit commodi sunt quae beatae nihil quibusdam ducimus
            architecto laboriosam. Suscipit id facere sunt dolorem? Sed, velit
            facilis doloribus quo modi id non, obcaecati vitae possimus repellat
            commodi dolorem praesentium officiis officia natus atque earum,
            dicta cumque. Sunt laudantium numquam ex! Quisquam harum ullam
            numquam nulla sunt in aliquam quibusdam at perspiciatis impedit,
            earum voluptatem tempore quia repudiandae, velit ad itaque natus,
            quasi provident maiores accusantium? Dolore quos debitis ducimus ex
            et, eius, magni enim libero consequuntur quod voluptatum
            perspiciatis a adipisci harum ratione rerum eligendi illo.
            Distinctio omnis voluptate excepturi quas vero repellat asperiores
            temporibus fuga perspiciatis natus velit sed porro quo,
            necessitatibus perferendis quaerat consequuntur reiciendis quibusdam
            nihil sunt architecto mollitia culpa illo quae. Inventore tempora
            asperiores doloremque vel et, voluptatum commodi dignissimos
            sapiente hic! Voluptates ipsum, aspernatur distinctio facilis
            praesentium nostrum nemo laudantium dolores quos nesciunt fuga
            sequi, esse excepturi sunt labore inventore, autem culpa tempore
            pariatur voluptas quis sapiente placeat est? Rerum omnis aperiam
            non, voluptatem ex corporis architecto! Ad non obcaecati autem nulla
            ullam possimus soluta esse, quas reprehenderit fuga itaque assumenda
            adipisci, tempore sequi animi fugit voluptate? Accusamus odio quos
            numquam, dignissimos officia molestiae rerum autem iure minus ipsum
            asperiores earum, voluptate voluptas nisi! Vitae repellendus
            quibusdam esse maxime quia rerum alias officiis, aut quaerat
            consectetur qui nobis recusandae iste animi ut at vero, tempora
            minima unde voluptates ducimus dolor. Magni perferendis voluptate
            iste officiis eius culpa nisi magnam. Incidunt at numquam fugit iste
            saepe, esse facere suscipit dolore deleniti autem ad ullam provident
            architecto magnam tempora, officia recusandae ut quibusdam sunt, rem
            odit eum maiores atque? Delectus eos voluptatibus aperiam facilis
            consequuntur. Corporis.
          </p>
        </div>
        <div>
          <Card className="sticky top-20">
            <CardHeader>
              <CardTitle>{project?.title}</CardTitle>
              <CardDescription className="line-clamp-2">
                {project?.description}
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
}
