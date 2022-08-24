import { PrismaClient } from "@prisma/client";

export default async function Ordenes(req, res) {
  const prisma = new PrismaClient();

  if (req.method === "POST") {
    const pedido = await prisma.orden.create({
      data: {
        nombre: req.body.nombre,
        fecha: req.body.fecha,
        total: req.body.total,
        pedido: req.body.pedido,
      },
    });
    res.json(pedido);
  }
}
