import { IconBuildingStore } from '@tabler/icons-react';
import { ComponentType } from '../types';

export const brand_list: ComponentType = {
  slug: 'brand-list',
  name: 'Brand List',
  icon: <IconBuildingStore stroke={1.5} />,
  description: 'A collection of brand logos presented in various stylish layouts.',
  variants: [
   {
      id: 'basic',
      name: 'Basic',
      code: `<section class="bg-white py-16 dark:bg-gray-900">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <h2 class="text-sm font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400">
        Trusted by leading companies
      </h2>
    </div>
    
    <div class="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
      <!-- Google -->
      <div class="col-span-1 flex items-center justify-center">
        <img
          class="h-12 grayscale transition hover:grayscale-0 dark:hidden"
          src="https://cdn.simpleicons.org/google/374151"
          alt="Google"
        />
        <img
          class="hidden h-12 grayscale transition hover:grayscale-0 dark:block"
          src="https://cdn.simpleicons.org/google/D1D5DB"
          alt="Google"
        />
      </div>
      
      <!-- Cloudflare -->
      <div class="col-span-1 flex items-center justify-center">
        <img
          class="h-12 grayscale transition hover:grayscale-0 dark:hidden"
          src="https://cdn.simpleicons.org/cloudflare/374151"
          alt="Cloudflare"
        />
        <img
          class="hidden h-12 grayscale transition hover:grayscale-0 dark:block"
          src="https://cdn.simpleicons.org/cloudflare/D1D5DB"
          alt="Cloudflare"
        />
      </div>
      
      <!-- Vercel -->
      <div class="col-span-1 flex items-center justify-center">
        <img
          class="h-12 grayscale transition hover:grayscale-0 dark:hidden"
          src="https://cdn.simpleicons.org/vercel/374151"
          alt="Vercel"
        />
        <img
          class="hidden h-12 grayscale transition hover:grayscale-0 dark:block"
          src="https://cdn.simpleicons.org/vercel/D1D5DB"
          alt="Vercel"
        />
      </div>
      
      <!-- Hetzner -->
      <div class="col-span-1 flex items-center justify-center">
        <img
          class="h-12 grayscale transition hover:grayscale-0 dark:hidden"
          src="https://cdn.simpleicons.org/hetzner/374151"
          alt="Hetzner"
        />
        <img
          class="hidden h-12 grayscale transition hover:grayscale-0 dark:block"
          src="https://cdn.simpleicons.org/hetzner/D1D5DB"
          alt="Hetzner"
        />
      </div>
      
      <!-- Apple -->
      <div class="col-span-1 flex items-center justify-center">
        <img
          class="h-12 grayscale transition hover:grayscale-0 dark:hidden"
          src="https://cdn.simpleicons.org/apple/374151"
          alt="Apple"
        />
        <img
          class="hidden h-12 grayscale transition hover:grayscale-0 dark:block"
          src="https://cdn.simpleicons.org/apple/D1D5DB"
          alt="Apple"
        />
      </div>
      
      <!-- Meta -->
      <div class="col-span-1 flex items-center justify-center">
        <img
          class="h-12 grayscale transition hover:grayscale-0 dark:hidden"
          src="https://cdn.simpleicons.org/meta/374151"
          alt="Meta"
        />
        <img
          class="hidden h-12 grayscale transition hover:grayscale-0 dark:block"
          src="https://cdn.simpleicons.org/meta/D1D5DB"
          alt="Meta"
        />
      </div>
    </div>
  </div>
</section>`,
      contributor: 'yuxxeun',
    },
    {
      id: 'bordered-cards',
      name: 'Bordered Cards',
      code: `<section class="bg-white py-16 dark:bg-gray-900">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <p class="text-sm font-semibold uppercase tracking-wide text-lime-600 dark:text-lime-400">
        Our Partners
      </p>
      <h2 class="mt-3 text-3xl font-bold text-gray-900 dark:text-white">
        Trusted by industry leaders
      </h2>
    </div>
    
    <div class="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
      <!-- Google -->
      <div class="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 transition hover:border-lime-500 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-lime-400">
        <div class="flex h-16 items-center justify-center">
          <img
            class="h-10 grayscale transition group-hover:grayscale-0 dark:hidden"
            src="https://cdn.simpleicons.org/google/374151"
            alt="Google"
          />
          <img
            class="hidden h-10 grayscale transition group-hover:grayscale-0 dark:block"
            src="https://cdn.simpleicons.org/google/D1D5DB"
            alt="Google"
          />
        </div>
      </div>
      
      <!-- Cloudflare -->
      <div class="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 transition hover:border-lime-500 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-lime-400">
        <div class="flex h-16 items-center justify-center">
          <img
            class="h-10 grayscale transition group-hover:grayscale-0 dark:hidden"
            src="https://cdn.simpleicons.org/cloudflare/374151"
            alt="Cloudflare"
          />
          <img
            class="hidden h-10 grayscale transition group-hover:grayscale-0 dark:block"
            src="https://cdn.simpleicons.org/cloudflare/D1D5DB"
            alt="Cloudflare"
          />
        </div>
      </div>
      
      <!-- Vercel -->
      <div class="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 transition hover:border-lime-500 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-lime-400">
        <div class="flex h-16 items-center justify-center">
          <img
            class="h-10 grayscale transition group-hover:grayscale-0 dark:hidden"
            src="https://cdn.simpleicons.org/vercel/374151"
            alt="Vercel"
          />
          <img
            class="hidden h-10 grayscale transition group-hover:grayscale-0 dark:block"
            src="https://cdn.simpleicons.org/vercel/D1D5DB"
            alt="Vercel"
          />
        </div>
      </div>
      
      <!-- Hetzner -->
      <div class="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 transition hover:border-lime-500 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-lime-400">
        <div class="flex h-16 items-center justify-center">
          <img
            class="h-10 grayscale transition group-hover:grayscale-0 dark:hidden"
            src="https://cdn.simpleicons.org/hetzner/374151"
            alt="Hetzner"
          />
          <img
            class="hidden h-10 grayscale transition group-hover:grayscale-0 dark:block"
            src="https://cdn.simpleicons.org/hetzner/D1D5DB"
            alt="Hetzner"
          />
        </div>
      </div>
      
      <!-- Apple -->
      <div class="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 transition hover:border-lime-500 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-lime-400">
        <div class="flex h-16 items-center justify-center">
          <img
            class="h-10 grayscale transition group-hover:grayscale-0 dark:hidden"
            src="https://cdn.simpleicons.org/apple/374151"
            alt="Apple"
          />
          <img
            class="hidden h-10 grayscale transition group-hover:grayscale-0 dark:block"
            src="https://cdn.simpleicons.org/apple/D1D5DB"
            alt="Apple"
          />
        </div>
      </div>
      
      <!-- Meta -->
      <div class="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 transition hover:border-lime-500 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-lime-400">
        <div class="flex h-16 items-center justify-center">
          <img
            class="h-10 grayscale transition group-hover:grayscale-0 dark:hidden"
            src="https://cdn.simpleicons.org/meta/374151"
            alt="Meta"
          />
          <img
            class="hidden h-10 grayscale transition group-hover:grayscale-0 dark:block"
            src="https://cdn.simpleicons.org/meta/D1D5DB"
            alt="Meta"
          />
        </div>
      </div>
    </div>
  </div>
</section>`,
      contributor: 'yuxxeun',
    },
    {
      id: 'centered',
      name: 'Centered',
      code: `<section class="bg-white py-16 dark:bg-gray-900">
  <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <p class="text-sm font-semibold uppercase tracking-wide text-lime-600 dark:text-lime-400">
        Trusted Worldwide
      </p>
      <h2 class="mt-3 text-3xl font-bold text-gray-900 dark:text-white">
        Join 100+ companies already growing
      </h2>
    </div>
    
    <div class="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
      <!-- Google -->
      <img
        class="h-12 opacity-50 grayscale transition hover:opacity-100 hover:grayscale-0 dark:hidden"
        src="https://cdn.simpleicons.org/google/374151"
        alt="Google"
      />
      <img
        class="hidden h-12 opacity-50 grayscale transition hover:opacity-100 hover:grayscale-0 dark:block"
        src="https://cdn.simpleicons.org/google/D1D5DB"
        alt="Google"
      />
      
      <!-- Cloudflare -->
      <img
        class="h-12 opacity-50 grayscale transition hover:opacity-100 hover:grayscale-0 dark:hidden"
        src="https://cdn.simpleicons.org/cloudflare/374151"
        alt="Cloudflare"
      />
      <img
        class="hidden h-12 opacity-50 grayscale transition hover:opacity-100 hover:grayscale-0 dark:block"
        src="https://cdn.simpleicons.org/cloudflare/D1D5DB"
        alt="Cloudflare"
      />
      
      <!-- Vercel -->
      <img
        class="h-12 opacity-50 grayscale transition hover:opacity-100 hover:grayscale-0 dark:hidden"
        src="https://cdn.simpleicons.org/vercel/374151"
        alt="Vercel"
      />
      <img
        class="hidden h-12 opacity-50 grayscale transition hover:opacity-100 hover:grayscale-0 dark:block"
        src="https://cdn.simpleicons.org/vercel/D1D5DB"
        alt="Vercel"
      />
      
      <!-- Hetzner -->
      <img
        class="h-12 opacity-50 grayscale transition hover:opacity-100 hover:grayscale-0 dark:hidden"
        src="https://cdn.simpleicons.org/hetzner/374151"
        alt="Hetzner"
      />
      <img
        class="hidden h-12 opacity-50 grayscale transition hover:opacity-100 hover:grayscale-0 dark:block"
        src="https://cdn.simpleicons.org/hetzner/D1D5DB"
        alt="Hetzner"
      />
      
      <!-- Apple -->
      <img
        class="h-12 opacity-50 grayscale transition hover:opacity-100 hover:grayscale-0 dark:hidden"
        src="https://cdn.simpleicons.org/apple/374151"
        alt="Apple"
      />
      <img
        class="hidden h-12 opacity-50 grayscale transition hover:opacity-100 hover:grayscale-0 dark:block"
        src="https://cdn.simpleicons.org/apple/D1D5DB"
        alt="Apple"
      />
      
      <!-- Meta -->
      <img
        class="h-12 opacity-50 grayscale transition hover:opacity-100 hover:grayscale-0 dark:hidden"
        src="https://cdn.simpleicons.org/meta/374151"
        alt="Meta"
      />
      <img
        class="hidden h-12 opacity-50 grayscale transition hover:opacity-100 hover:grayscale-0 dark:block"
        src="https://cdn.simpleicons.org/meta/D1D5DB"
        alt="Meta"
      />
    </div>
  </div>
</section>`,
      contributor: 'yuxxeun',
    },
    {
      id: 'with-badge',
      name: 'With Badge',
      code: `<section class="relative overflow-hidden bg-gradient-to-br from-lime-50 to-white py-16 dark:from-gray-900 dark:to-gray-900">
  <div class="absolute inset-0 bg-grid-gray-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-gray-800"></div>
  
  <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <span class="inline-flex items-center gap-2 rounded-full bg-lime-100 px-4 py-1.5 text-sm font-medium text-lime-700 dark:bg-lime-900/50 dark:text-lime-300">
        <svg class="size-4" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
        </svg>
        Verified Partners
      </span>
      <h2 class="mt-3 text-3xl font-bold text-gray-900 dark:text-white">
        Powering the world's best teams
      </h2>
    </div>
    
    <div class="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
      <!-- Google -->
      <div class="col-span-1 flex items-center justify-center rounded-2xl bg-white/50 p-8 backdrop-blur-sm transition hover:bg-white dark:bg-gray-900/50 dark:hover:bg-gray-900">
        <img
          class="h-12 grayscale transition hover:grayscale-0 dark:hidden"
          src="https://cdn.simpleicons.org/google/374151"
          alt="Google"
        />
        <img
          class="hidden h-12 grayscale transition hover:grayscale-0 dark:block"
          src="https://cdn.simpleicons.org/google/D1D5DB"
          alt="Google"
        />
      </div>
      
      <!-- Cloudflare -->
      <div class="col-span-1 flex items-center justify-center rounded-2xl bg-white/50 p-8 backdrop-blur-sm transition hover:bg-white dark:bg-gray-900/50 dark:hover:bg-gray-900">
        <img
          class="h-12 grayscale transition hover:grayscale-0 dark:hidden"
          src="https://cdn.simpleicons.org/cloudflare/374151"
          alt="Cloudflare"
        />
        <img
          class="hidden h-12 grayscale transition hover:grayscale-0 dark:block"
          src="https://cdn.simpleicons.org/cloudflare/D1D5DB"
          alt="Cloudflare"
        />
      </div>
      
      <!-- Vercel -->
      <div class="col-span-1 flex items-center justify-center rounded-2xl bg-white/50 p-8 backdrop-blur-sm transition hover:bg-white dark:bg-gray-900/50 dark:hover:bg-gray-900">
        <img
          class="h-12 grayscale transition hover:grayscale-0 dark:hidden"
          src="https://cdn.simpleicons.org/vercel/374151"
          alt="Vercel"
        />
        <img
          class="hidden h-12 grayscale transition hover:grayscale-0 dark:block"
          src="https://cdn.simpleicons.org/vercel/D1D5DB"
          alt="Vercel"
        />
      </div>
      
      <!-- Hetzner -->
      <div class="col-span-1 flex items-center justify-center rounded-2xl bg-white/50 p-8 backdrop-blur-sm transition hover:bg-white dark:bg-gray-900/50 dark:hover:bg-gray-900">
        <img
          class="h-12 grayscale transition hover:grayscale-0 dark:hidden"
          src="https://cdn.simpleicons.org/hetzner/374151"
          alt="Hetzner"
        />
        <img
          class="hidden h-12 grayscale transition hover:grayscale-0 dark:block"
          src="https://cdn.simpleicons.org/hetzner/D1D5DB"
          alt="Hetzner"
        />
      </div>
      
      <!-- Apple -->
      <div class="col-span-1 flex items-center justify-center rounded-2xl bg-white/50 p-8 backdrop-blur-sm transition hover:bg-white dark:bg-gray-900/50 dark:hover:bg-gray-900">
        <img
          class="h-12 grayscale transition hover:grayscale-0 dark:hidden"
          src="https://cdn.simpleicons.org/apple/374151"
          alt="Apple"
        />
        <img
          class="hidden h-12 grayscale transition hover:grayscale-0 dark:block"
          src="https://cdn.simpleicons.org/apple/D1D5DB"
          alt="Apple"
        />
      </div>
      
      <!-- Meta -->
      <div class="col-span-1 flex items-center justify-center rounded-2xl bg-white/50 p-8 backdrop-blur-sm transition hover:bg-white dark:bg-gray-900/50 dark:hover:bg-gray-900">
        <img
          class="h-12 grayscale transition hover:grayscale-0 dark:hidden"
          src="https://cdn.simpleicons.org/meta/374151"
          alt="Meta"
        />
        <img
          class="hidden h-12 grayscale transition hover:grayscale-0 dark:block"
          src="https://cdn.simpleicons.org/meta/D1D5DB"
          alt="Meta"
        />
      </div>
    </div>
  </div>
</section>`,
      contributor: 'yuxxeun',
    },
    {
      id: 'hover-effect',
      name: 'Hover Effect',
      code: `<section class="bg-white py-16 dark:bg-gray-900">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <p class="text-sm font-semibold uppercase tracking-wide text-lime-600 dark:text-lime-400">
        Global Reach
      </p>
      <h2 class="mt-3 text-3xl font-bold text-gray-900 dark:text-white">
        The brands we work with
      </h2>
      <p class="mt-4 text-lg text-gray-600 dark:text-gray-400">
        Thousands of companies using our platform
      </p>
    </div>
    
    <div class="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
      <!-- Google -->
      <div class="group relative">
        <div class="absolute -inset-1 rounded-2xl bg-gradient-to-r from-lime-600 to-lime-400 opacity-0 blur transition group-hover:opacity-100"></div>
        <div class="relative flex h-32 items-center justify-center rounded-xl border border-gray-200 bg-white p-6 transition group-hover:border-transparent dark:border-gray-800 dark:bg-gray-900">
          <img
            class="h-10 grayscale transition group-hover:grayscale-0 dark:hidden"
            src="https://cdn.simpleicons.org/google/374151"
            alt="Google"
          />
          <img
            class="hidden h-10 grayscale transition group-hover:grayscale-0 dark:block"
            src="https://cdn.simpleicons.org/google/D1D5DB"
            alt="Google"
          />
        </div>
      </div>
      
      <!-- Cloudflare -->
      <div class="group relative">
        <div class="absolute -inset-1 rounded-2xl bg-gradient-to-r from-lime-600 to-lime-400 opacity-0 blur transition group-hover:opacity-100"></div>
        <div class="relative flex h-32 items-center justify-center rounded-xl border border-gray-200 bg-white p-6 transition group-hover:border-transparent dark:border-gray-800 dark:bg-gray-900">
          <img
            class="h-10 grayscale transition group-hover:grayscale-0 dark:hidden"
            src="https://cdn.simpleicons.org/cloudflare/374151"
            alt="Cloudflare"
          />
          <img
            class="hidden h-10 grayscale transition group-hover:grayscale-0 dark:block"
            src="https://cdn.simpleicons.org/cloudflare/D1D5DB"
            alt="Cloudflare"
          />
        </div>
      </div>
      
      <!-- Vercel -->
      <div class="group relative">
        <div class="absolute -inset-1 rounded-2xl bg-gradient-to-r from-lime-600 to-lime-400 opacity-0 blur transition group-hover:opacity-100"></div>
        <div class="relative flex h-32 items-center justify-center rounded-xl border border-gray-200 bg-white p-6 transition group-hover:border-transparent dark:border-gray-800 dark:bg-gray-900">
          <img
            class="h-10 grayscale transition group-hover:grayscale-0 dark:hidden"
            src="https://cdn.simpleicons.org/vercel/374151"
            alt="Vercel"
          />
          <img
            class="hidden h-10 grayscale transition group-hover:grayscale-0 dark:block"
            src="https://cdn.simpleicons.org/vercel/D1D5DB"
            alt="Vercel"
          />
        </div>
      </div>
      
      <!-- Hetzner -->
      <div class="group relative">
        <div class="absolute -inset-1 rounded-2xl bg-gradient-to-r from-lime-600 to-lime-400 opacity-0 blur transition group-hover:opacity-100"></div>
        <div class="relative flex h-32 items-center justify-center rounded-xl border border-gray-200 bg-white p-6 transition group-hover:border-transparent dark:border-gray-800 dark:bg-gray-900">
          <img
            class="h-10 grayscale transition group-hover:grayscale-0 dark:hidden"
            src="https://cdn.simpleicons.org/hetzner/374151"
            alt="Hetzner"
          />
          <img
            class="hidden h-10 grayscale transition group-hover:grayscale-0 dark:block"
            src="https://cdn.simpleicons.org/hetzner/D1D5DB"
            alt="Hetzner"
          />
        </div>
      </div>
      
      <!-- Apple -->
      <div class="group relative">
        <div class="absolute -inset-1 rounded-2xl bg-gradient-to-r from-lime-600 to-lime-400 opacity-0 blur transition group-hover:opacity-100"></div>
        <div class="relative flex h-32 items-center justify-center rounded-xl border border-gray-200 bg-white p-6 transition group-hover:border-transparent dark:border-gray-800 dark:bg-gray-900">
          <img
            class="h-10 grayscale transition group-hover:grayscale-0 dark:hidden"
            src="https://cdn.simpleicons.org/apple/374151"
            alt="Apple"
          />
          <img
            class="hidden h-10 grayscale transition group-hover:grayscale-0 dark:block"
            src="https://cdn.simpleicons.org/apple/D1D5DB"
            alt="Apple"
          />
        </div>
      </div>
      
      <!-- Meta -->
      <div class="group relative">
        <div class="absolute -inset-1 rounded-2xl bg-gradient-to-r from-lime-600 to-lime-400 opacity-0 blur transition group-hover:opacity-100"></div>
        <div class="relative flex h-32 items-center justify-center rounded-xl border border-gray-200 bg-white p-6 transition group-hover:border-transparent dark:border-gray-800 dark:bg-gray-900">
          <img
            class="h-10 grayscale transition group-hover:grayscale-0 dark:hidden"
            src="https://cdn.simpleicons.org/meta/374151"
            alt="Meta"
          />
          <img
            class="hidden h-10 grayscale transition group-hover:grayscale-0 dark:block"
            src="https://cdn.simpleicons.org/meta/D1D5DB"
            alt="Meta"
          />
        </div>
      </div>
    </div>
  </div>
</section>`,
      contributor: 'yuxxeun',
    },
    {
      id: 'with-marquee',
      name: 'With Marquee',
      code: `<section class="bg-white py-16 dark:bg-gray-900">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <h2 class="text-sm font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400">
        Trusted by the best
      </h2>
    </div>
    
    <div class="relative mt-10 overflow-hidden">
      <div class="flex animate-marquee gap-16">
        <div class="flex min-w-full shrink-0 items-center justify-around gap-16">
          <img class="h-12 grayscale opacity-70 transition hover:opacity-100 hover:grayscale-0 dark:hidden" src="https://cdn.simpleicons.org/vercel/374151" alt="Vercel" />
          <img class="hidden h-12 grayscale opacity-70 transition hover:opacity-100 hover:grayscale-0 dark:block" src="https://cdn.simpleicons.org/vercel/D1D5DB" alt="Vercel" />
          
          <img class="h-12 grayscale opacity-70 transition hover:opacity-100 hover:grayscale-0 dark:hidden" src="https://cdn.simpleicons.org/hetzner/374151" alt="Hetzner" />
          <img class="hidden h-12 grayscale opacity-70 transition hover:opacity-100 hover:grayscale-0 dark:block" src="https://cdn.simpleicons.org/hetzner/D1D5DB" alt="Hetzner" />
          
          <img class="h-12 grayscale opacity-70 transition hover:opacity-100 hover:grayscale-0 dark:hidden" src="https://cdn.simpleicons.org/apple/374151" alt="Apple" />
          <img class="hidden h-12 grayscale opacity-70 transition hover:opacity-100 hover:grayscale-0 dark:block" src="https://cdn.simpleicons.org/apple/D1D5DB" alt="Apple" />
          
          <img class="h-12 grayscale opacity-70 transition hover:opacity-100 hover:grayscale-0 dark:hidden" src="https://cdn.simpleicons.org/meta/374151" alt="Meta" />
          <img class="hidden h-12 grayscale opacity-70 transition hover:opacity-100 hover:grayscale-0 dark:block" src="https://cdn.simpleicons.org/meta/D1D5DB" alt="Meta" />
        </div>
        <div class="flex min-w-full shrink-0 items-center justify-around gap-16" aria-hidden="true">
          <img class="h-12 grayscale opacity-70 transition hover:opacity-100 hover:grayscale-0 dark:hidden" src="https://cdn.simpleicons.org/google/374151" alt="Google" />
          <img class="hidden h-12 grayscale opacity-70 transition hover:opacity-100 hover:grayscale-0 dark:block" src="https://cdn.simpleicons.org/google/D1D5DB" alt="Google" />
          
          <img class="h-12 grayscale opacity-70 transition hover:opacity-100 hover:grayscale-0 dark:hidden" src="https://cdn.simpleicons.org/cloudflare/374151" alt="Cloudflare" />
          <img class="hidden h-12 grayscale opacity-70 transition hover:opacity-100 hover:grayscale-0 dark:block" src="https://cdn.simpleicons.org/cloudflare/D1D5DB" alt="Cloudflare" />
          
          <img class="h-12 grayscale opacity-70 transition hover:opacity-100 hover:grayscale-0 dark:hidden" src="https://cdn.simpleicons.org/vercel/374151" alt="Vercel" />
          <img class="hidden h-12 grayscale opacity-70 transition hover:opacity-100 hover:grayscale-0 dark:block" src="https://cdn.simpleicons.org/vercel/D1D5DB" alt="Vercel" />
          
          <img class="h-12 grayscale opacity-70 transition hover:opacity-100 hover:grayscale-0 dark:hidden" src="https://cdn.simpleicons.org/hetzner/374151" alt="Hetzner" />
          <img class="hidden h-12 grayscale opacity-70 transition hover:opacity-100 hover:grayscale-0 dark:block" src="https://cdn.simpleicons.org/hetzner/D1D5DB" alt="Hetzner" />
          
          <img class="h-12 grayscale opacity-70 transition hover:opacity-100 hover:grayscale-0 dark:hidden" src="https://cdn.simpleicons.org/apple/374151" alt="Apple" />
          <img class="hidden h-12 grayscale opacity-70 transition hover:opacity-100 hover:grayscale-0 dark:block" src="https://cdn.simpleicons.org/apple/D1D5DB" alt="Apple" />
          
          <img class="h-12 grayscale opacity-70 transition hover:opacity-100 hover:grayscale-0 dark:hidden" src="https://cdn.simpleicons.org/meta/374151" alt="Meta" />
          <img class="hidden h-12 grayscale opacity-70 transition hover:opacity-100 hover:grayscale-0 dark:block" src="https://cdn.simpleicons.org/meta/D1D5DB" alt="Meta" />
        </div>
      </div>
    </div>
  </div>

  <!-- Since HTML marquee tag is deprecated, so it's replaced with additional CSS animation -->
  <style>
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-100%); }
    }
    .animate-marquee {
      animation: marquee 30s linear infinite;
    }
    .animate-marquee:hover {
      animation-play-state: paused;
    }
  </style>
</section>`,
      contributor: 'yuxxeun',
    },
    {
      id: 'bento-grid',
      name: 'Bento Grid',
      code: `<section class="bg-white py-16 dark:bg-gray-900">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <p class="text-sm font-semibold uppercase tracking-wide text-lime-600 dark:text-lime-400">
        Featured Partners
      </p>
      <h2 class="mt-3 text-3xl font-bold text-gray-900 dark:text-white">
        Brands that trust us
      </h2>
    </div>
    
    <div class="mt-10 grid auto-rows-fr grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      <div class="col-span-2 row-span-2 flex items-center justify-center rounded-2xl border border-gray-200 bg-gradient-to-br from-lime-50 to-white p-12 transition hover:border-lime-500 dark:border-gray-800 dark:from-gray-900 dark:to-gray-900 dark:hover:border-lime-400">
        <img class="h-16 grayscale transition hover:grayscale-0 dark:hidden" src="https://cdn.simpleicons.org/google/374151" alt="Google" />
        <img class="hidden h-16 grayscale transition hover:grayscale-0 dark:block" src="https://cdn.simpleicons.org/google/D1D5DB" alt="Google" />
      </div>
      <div class="flex items-center justify-center rounded-2xl border border-gray-200 bg-white p-8 transition hover:border-lime-500 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-lime-400">
        <img class="h-10 grayscale transition hover:grayscale-0 dark:hidden" src="https://cdn.simpleicons.org/cloudflare/374151" alt="Cloudflare" />
        <img class="hidden h-10 grayscale transition hover:grayscale-0 dark:block" src="https://cdn.simpleicons.org/cloudflare/D1D5DB" alt="Cloudflare" />
      </div>
      <div class="flex items-center justify-center rounded-2xl border border-gray-200 bg-white p-8 transition hover:border-lime-500 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-lime-400">
        <img class="h-10 grayscale transition hover:grayscale-0 dark:hidden" src="https://cdn.simpleicons.org/vercel/374151" alt="Vercel" />
        <img class="hidden h-10 grayscale transition hover:grayscale-0 dark:block" src="https://cdn.simpleicons.org/vercel/D1D5DB" alt="Vercel" />
      </div>
      <div class="flex items-center justify-center rounded-2xl border border-gray-200 bg-white p-8 transition hover:border-lime-500 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-lime-400">
        <img class="h-10 grayscale transition hover:grayscale-0 dark:hidden" src="https://cdn.simpleicons.org/hetzner/374151" alt="Hetzner" />
        <img class="hidden h-10 grayscale transition hover:grayscale-0 dark:block" src="https://cdn.simpleicons.org/hetzner/D1D5DB" alt="Hetzner" />
      </div>
      <div class="flex items-center justify-center rounded-2xl border border-gray-200 bg-white p-8 transition hover:border-lime-500 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-lime-400">
        <img class="h-10 grayscale transition hover:grayscale-0 dark:hidden" src="https://cdn.simpleicons.org/apple/374151" alt="Apple" />
        <img class="hidden h-10 grayscale transition hover:grayscale-0 dark:block" src="https://cdn.simpleicons.org/apple/D1D5DB" alt="Apple" />
      </div>
      <div class="col-span-2 flex items-center justify-center rounded-2xl border border-gray-200 bg-white p-8 transition hover:border-lime-500 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-lime-400">
        <img class="h-12 grayscale transition hover:grayscale-0 dark:hidden" src="https://cdn.simpleicons.org/meta/374151" alt="Meta" />
        <img class="hidden h-12 grayscale transition hover:grayscale-0 dark:block" src="https://cdn.simpleicons.org/meta/D1D5DB" alt="Meta" />
      </div>
    </div>
  </div>
</section>`,
      contributor: 'yuxxeun',
    },
    {
      id: 'split-layout',
      name: 'Split Layout',
      code: `<section class="bg-white py-16 dark:bg-gray-900">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <p class="text-sm font-semibold uppercase tracking-wide text-lime-600 dark:text-lime-400">
        Strategic Partnerships
      </p>
      <h2 class="mt-3 text-3xl font-bold text-gray-900 dark:text-white">
        Leading companies choose us
      </h2>
    </div>
    
    <div class="mt-10 grid gap-8 lg:grid-cols-2">
      <!-- Left Column -->
      <div class="space-y-6">
        <div class="flex items-center gap-6 rounded-xl border border-gray-200 bg-white p-6 transition hover:border-lime-500 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-lime-400">
          <img class="h-12 grayscale transition hover:grayscale-0 dark:hidden" src="https://cdn.simpleicons.org/google/374151" alt="Google" />
          <img class="hidden h-12 grayscale transition hover:grayscale-0 dark:block" src="https://cdn.simpleicons.org/google/D1D5DB" alt="Google" />
          <div class="flex-1">
            <h3 class="font-semibold text-gray-900 dark:text-white">Google</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">Technology Partner</p>
          </div>
        </div>
        
        <div class="flex items-center gap-6 rounded-xl border border-gray-200 bg-white p-6 transition hover:border-lime-500 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-lime-400">
          <img class="h-12 grayscale transition hover:grayscale-0 dark:hidden" src="https://cdn.simpleicons.org/vercel/374151" alt="Vercel" />
          <img class="hidden h-12 grayscale transition hover:grayscale-0 dark:block" src="https://cdn.simpleicons.org/vercel/D1D5DB" alt="Vercel" />
          <div class="flex-1">
            <h3 class="font-semibold text-gray-900 dark:text-white">Vercel</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">Deployment Partner</p>
          </div>
        </div>
        
        <div class="flex items-center gap-6 rounded-xl border border-gray-200 bg-white p-6 transition hover:border-lime-500 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-lime-400">
          <img class="h-12 grayscale transition hover:grayscale-0 dark:hidden" src="https://cdn.simpleicons.org/apple/374151" alt="Apple" />
          <img class="hidden h-12 grayscale transition hover:grayscale-0 dark:block" src="https://cdn.simpleicons.org/apple/D1D5DB" alt="Apple" />
          <div class="flex-1">
            <h3 class="font-semibold text-gray-900 dark:text-white">Apple</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">Enterprise Client</p>
          </div>
        </div>
      </div>
      
      <!-- Right Column -->
      <div class="space-y-6">
        <div class="flex items-center gap-6 rounded-xl border border-gray-200 bg-white p-6 transition hover:border-lime-500 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-lime-400">
          <img class="h-12 grayscale transition hover:grayscale-0 dark:hidden" src="https://cdn.simpleicons.org/cloudflare/374151" alt="Cloudflare" />
          <img class="hidden h-12 grayscale transition hover:grayscale-0 dark:block" src="https://cdn.simpleicons.org/cloudflare/D1D5DB" alt="Cloudflare" />
          <div class="flex-1">
            <h3 class="font-semibold text-gray-900 dark:text-white">Cloudflare</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">Security Partner</p>
          </div>
        </div>
        
        <div class="flex items-center gap-6 rounded-xl border border-gray-200 bg-white p-6 transition hover:border-lime-500 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-lime-400">
          <img class="h-12 grayscale transition hover:grayscale-0 dark:hidden" src="https://cdn.simpleicons.org/hetzner/374151" alt="Hetzner" />
          <img class="hidden h-12 grayscale transition hover:grayscale-0 dark:block" src="https://cdn.simpleicons.org/hetzner/D1D5DB" alt="Hetzner" />
          <div class="flex-1">
            <h3 class="font-semibold text-gray-900 dark:text-white">Hetzner</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">Infrastructure Partner</p>
          </div>
        </div>
        
        <div class="flex items-center gap-6 rounded-xl border border-gray-200 bg-white p-6 transition hover:border-lime-500 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-lime-400">
          <img class="h-12 grayscale transition hover:grayscale-0 dark:hidden" src="https://cdn.simpleicons.org/meta/374151" alt="Meta" />
          <img class="hidden h-12 grayscale transition hover:grayscale-0 dark:block" src="https://cdn.simpleicons.org/meta/D1D5DB" alt="Meta" />
          <div class="flex-1">
            <h3 class="font-semibold text-gray-900 dark:text-white">Meta</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">Innovation Partner</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`,
      contributor: 'yuxxeun',
    },
    {
      id: 'floating-cards',
      name: 'Floating Cards',
      code: `<section class="bg-gray-50 py-16 dark:bg-gray-900">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <p class="text-sm font-semibold uppercase tracking-wide text-lime-600 dark:text-lime-400">
        Industry Leaders
      </p>
      <h2 class="mt-3 text-3xl font-bold text-gray-900 dark:text-white">
        Companies that drive innovation
      </h2>
    </div>
    
    <div class="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
      <!-- Google -->
      <div class="group relative">
        <div class="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-lime-600 to-lime-400 opacity-0 blur transition duration-300 group-hover:opacity-75"></div>
        <div class="relative flex h-40 items-center justify-center rounded-xl bg-white p-8 shadow-lg transition duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl dark:bg-gray-900">
          <img
            class="h-12 grayscale transition group-hover:grayscale-0 dark:hidden"
            src="https://cdn.simpleicons.org/google/374151"
            alt="Google"
          />
          <img
            class="hidden h-12 grayscale transition group-hover:grayscale-0 dark:block"
            src="https://cdn.simpleicons.org/google/D1D5DB"
            alt="Google"
          />
        </div>
      </div>
      
      <!-- Cloudflare -->
      <div class="group relative">
        <div class="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-lime-600 to-lime-400 opacity-0 blur transition duration-300 group-hover:opacity-75"></div>
        <div class="relative flex h-40 items-center justify-center rounded-xl bg-white p-8 shadow-lg transition duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl dark:bg-gray-900">
          <img
            class="h-12 grayscale transition group-hover:grayscale-0 dark:hidden"
            src="https://cdn.simpleicons.org/cloudflare/374151"
            alt="Cloudflare"
          />
          <img
            class="hidden h-12 grayscale transition group-hover:grayscale-0 dark:block"
            src="https://cdn.simpleicons.org/cloudflare/D1D5DB"
            alt="Cloudflare"
          />
        </div>
      </div>
      
      <!-- Vercel -->
      <div class="group relative">
        <div class="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-lime-600 to-lime-400 opacity-0 blur transition duration-300 group-hover:opacity-75"></div>
        <div class="relative flex h-40 items-center justify-center rounded-xl bg-white p-8 shadow-lg transition duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl dark:bg-gray-900">
          <img
            class="h-12 grayscale transition group-hover:grayscale-0 dark:hidden"
            src="https://cdn.simpleicons.org/vercel/374151"
            alt="Vercel"
          />
          <img
            class="hidden h-12 grayscale transition group-hover:grayscale-0 dark:block"
            src="https://cdn.simpleicons.org/vercel/D1D5DB"
            alt="Vercel"
          />
        </div>
      </div>
      
      <!-- Hetzner -->
      <div class="group relative">
        <div class="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-lime-600 to-lime-400 opacity-0 blur transition duration-300 group-hover:opacity-75"></div>
        <div class="relative flex h-40 items-center justify-center rounded-xl bg-white p-8 shadow-lg transition duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl dark:bg-gray-900">
          <img
            class="h-12 grayscale transition group-hover:grayscale-0 dark:hidden"
            src="https://cdn.simpleicons.org/hetzner/374151"
            alt="Hetzner"
          />
          <img
            class="hidden h-12 grayscale transition group-hover:grayscale-0 dark:block"
            src="https://cdn.simpleicons.org/hetzner/D1D5DB"
            alt="Hetzner"
          />
        </div>
      </div>
      
      <!-- Apple -->
      <div class="group relative">
        <div class="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-lime-600 to-lime-400 opacity-0 blur transition duration-300 group-hover:opacity-75"></div>
        <div class="relative flex h-40 items-center justify-center rounded-xl bg-white p-8 shadow-lg transition duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl dark:bg-gray-900">
          <img
            class="h-12 grayscale transition group-hover:grayscale-0 dark:hidden"
            src="https://cdn.simpleicons.org/apple/374151"
            alt="Apple"
          />
          <img
            class="hidden h-12 grayscale transition group-hover:grayscale-0 dark:block"
            src="https://cdn.simpleicons.org/apple/D1D5DB"
            alt="Apple"
          />
        </div>
      </div>
      
      <!-- Meta -->
      <div class="group relative">
        <div class="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-lime-600 to-lime-400 opacity-0 blur transition duration-300 group-hover:opacity-75"></div>
        <div class="relative flex h-40 items-center justify-center rounded-xl bg-white p-8 shadow-lg transition duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl dark:bg-gray-900">
          <img
            class="h-12 grayscale transition group-hover:grayscale-0 dark:hidden"
            src="https://cdn.simpleicons.org/meta/374151"
            alt="Meta"
          />
          <img
            class="hidden h-12 grayscale transition group-hover:grayscale-0 dark:block"
            src="https://cdn.simpleicons.org/meta/D1D5DB"
            alt="Meta"
          />
        </div>
      </div>
    </div>
  </div>
</section>`,
      contributor: 'yuxxeun',
    },
  ],
};