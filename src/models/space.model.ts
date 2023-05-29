import mongoose, { Schema, Document, Types } from 'mongoose';


export interface ISpace {
    id: string;
    name: string;
    description: string;
    images: string[];
    type: string;
    capacity: number;
    duration: string;
    openingHours: string[];
    handicapAccessible: boolean;
    maintenance: boolean;
  }
  const SpaceSchema: Schema = new Schema(
    {
      id: { type: String, required: true },
      name: { type: String, required: true, unique: true },
      description: { type: String, required: true },
      images: [{ type: String }],
      type: { type: String, required: true },
      capacity: { type: Number, required: true },
      duration: { type: String, required: true },
      openingHours: [{ type: String, required: true }],
      handicapAccessible: { type: Boolean, required: true },
      maintenance: { type: Boolean, required: true },
    },
    {
      timestamps: true,
      collection: 'spaces',
    }
  );
  export const Space = mongoose.model<ISpace>('Space', SpaceSchema);