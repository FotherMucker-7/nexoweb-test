import React from 'react';
import logo from '../../../assets/logo.webp';

export function PageLoader() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-[50vh]">
      <div className="relative group p-4">
        {/* Sombra de bloque animada Neo-Brutalista */}
        <div className="absolute top-6 left-6 w-16 h-16 bg-[var(--color-cyan)] border-4 border-foreground transition-all duration-300" />
        
        {/* Contenedor principal */}
        <div className="relative w-16 h-16 bg-card border-4 border-foreground flex items-center justify-center animate-bounce shadow-[4px_4px_0px_var(--color-magenta)]">
          <img 
            src={logo} 
            alt="Cargando NexoWeb..." 
            className="w-8 h-8 object-contain"
          />
        </div>
        
        {/* Texto de carga sutil */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground animate-pulse">
            Cargando...
          </span>
        </div>
      </div>
    </div>
  );
}
