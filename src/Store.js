import { create } from 'zustand'

export const useBearStore = create((set) => ({
  firstName: "",
  setFirstName: (data) => set((state) => ({ firstName: data })),
  lastName: "",
  setLastName: (data) => set((state) => ({ lastName: data })),
  phone: "",
  setphone: (data) => set((state) => ({ phone: data })),
  phone1: "",
  setphone1: (data) => set((state) => ({ phone1: data })),
  email: "",
  setEmail : (data) => set((state) => ({ email: data })),
  home1: "",
  setHome1 : (data) => set((state) => ({ home1: data })),
  home2: "",
  setHome2 : (data) => set((state) => ({ home2: data })),
  home3: "",
  setHome3 : (data) => set((state) => ({ home3: data })),
  home4: "",
  setHome4 : (data) => set((state) => ({ home4: data })),
  birthDay: "",
  setBirthDay: (data) => set((state) => ({ birthDay: data })),
  notes: "",
  setNotes: (data) => set((state) => ({ notes: data })),
  data: {},
  setData: (sentData) => set((state) => ({ data: sentData })),

}))

