import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Project } from "@/data/portfolio";

interface PortfolioState {
  activeCategory: string;
  activeProject: Project | null;
  projectDialogOpen: boolean;
  contactDialogOpen: boolean;
  mobileMenuOpen: boolean;
}

const initialState: PortfolioState = {
  activeCategory: "All",
  activeProject: null,
  projectDialogOpen: false,
  contactDialogOpen: false,
  mobileMenuOpen: false,
};

export const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    setActiveCategory: (state, action: PayloadAction<string>) => {
      state.activeCategory = action.payload;
    },
    openProjectDialog: (state, action: PayloadAction<Project>) => {
      state.activeProject = action.payload;
      state.projectDialogOpen = true;
    },
    closeProjectDialog: (state) => {
      state.projectDialogOpen = false;
      state.activeProject = null;
    },
    setContactDialogOpen: (state, action: PayloadAction<boolean>) => {
      state.contactDialogOpen = action.payload;
    },
    setMobileMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.mobileMenuOpen = action.payload;
    },
  },
});

export const {
  setActiveCategory,
  openProjectDialog,
  closeProjectDialog,
  setContactDialogOpen,
  setMobileMenuOpen,
} = portfolioSlice.actions;

export default portfolioSlice.reducer;
