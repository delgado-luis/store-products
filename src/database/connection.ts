import { AppDataSource } from './data-source.ts';

export const initializeDataSource = async () => {
  if (AppDataSource.isInitialized) return;

  try {
    await AppDataSource.initialize();
  } catch (error) {
    console.log('Error initializing AppDataSource');
    throw error;
  }
};
