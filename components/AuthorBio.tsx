import Image from 'next/image';

export function AuthorBio() {
  const name = "Crypto Jim";
  const bio = "After over a decade navigating the wild west of US crypto exchanges, where he managed multi-million dollar client portfolios and learned that the only thing more volatile than Bitcoin is a trader's caffeine intake during market hours, he's seen fortunes made and lost faster than a New York minute. Having survived multiple bear markets, countless \"revolutionary\" altcoins, and the eternal question of whether this dip is \"just a correction\" or the apocalypse, he now shares his hard-earned wisdom with fellow degens and diamond hands alike. His blog combines Wall Street-level analysis with the kind of humor that keeps you sane when your portfolio looks like a modern art masterpiece painted in red.";

  return (
    <div className="mt-16 pt-8 border-t border-white/10 flex items-start gap-6">
      <Image
        src="/images/avatar.png"
        alt={name}
        width={80}
        height={80}
        className="rounded-full"
      />
      <div>
        <h3 className="text-xl font-bold text-white">About {name}</h3>
        <p className="text-gray-400 mt-2">{bio}</p>
      </div>
    </div>
  );
} 