import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function FormProfil() {
  const [name, setName] = useState("Dara");
  const [email, setEmail] = useState("daraaa@gmail.com");
  const [phone, setPhone] = useState("082269725839");
  const [address, setAddress] = useState("Jln. Purnama asri RT 13 Blok A14");

  const navigate = useNavigate();

  const handleNavigate = () => {
<<<<<<< HEAD
    navigate("/edit-profil");
=======
    navigate("/edit-profil"); 
>>>>>>> 3c3c0b9ba57f69134acc6041083e548c86ee2db7
  };

  return (
    <form className="space-y-7">
      {/* Input Fields */}
      <div className="grid grid-cols-1 gap-6">
        {/* Nama */}
        <div className="flex items-center">
          <Label htmlFor="name" className="text-gray-700 font-medium w-32">
            Nama
          </Label>
          <Input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
<<<<<<< HEAD
            disabled
=======
>>>>>>> 3c3c0b9ba57f69134acc6041083e548c86ee2db7
            className="flex-1 border-gray-400 rounded-lg"
          />
        </div>

        {/* Email */}
        <div className="flex items-center">
          <Label htmlFor="email" className="text-gray-700 font-medium w-32">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
<<<<<<< HEAD
            disabled
=======
>>>>>>> 3c3c0b9ba57f69134acc6041083e548c86ee2db7
            className="flex-1 border-gray-400 rounded-lg"
          />
        </div>

        {/* Nomor Telepon */}
        <div className="flex items-center">
          <Label htmlFor="phone" className="text-gray-700 font-medium w-32">
            Nomor Telepon
          </Label>
          <Input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
<<<<<<< HEAD
            disabled
=======
>>>>>>> 3c3c0b9ba57f69134acc6041083e548c86ee2db7
            className="flex-1 border-gray-400 rounded-lg"
          />
        </div>

        {/* Alamat */}
        <div className="flex items-center">
          <Label htmlFor="address" className="text-gray-700 font-medium w-32">
            Alamat
          </Label>
          <Input
            id="address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
<<<<<<< HEAD
            disabled
=======
>>>>>>> 3c3c0b9ba57f69134acc6041083e548c86ee2db7
            className="flex-1 border-gray-400 rounded-lg"
          />
        </div>
      </div>

      {/* Tombol Simpan */}
      <div className="flex justify-end space-x-4 mt-6">
        <Button
          className="bg-black text-white py-2 px-6 rounded-lg"
<<<<<<< HEAD
          onClick={handleNavigate}
=======
          onClick={handleNavigate} 
>>>>>>> 3c3c0b9ba57f69134acc6041083e548c86ee2db7
        >
          Perbarui Profil
        </Button>
      </div>
    </form>
  );
}
